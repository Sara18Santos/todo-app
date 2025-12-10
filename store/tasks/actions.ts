import { ITask } from "@/types/tasks";
import { v4 as uuidv4 } from "uuid";
import { addTodo, editTodo, deleteTodo } from "@/api";
import { taskState, useTaskStore } from "@/store/tasks/state"

// create task 
export const createTask = async (data: Omit<ITask, "id" | "createdAt">) => {
  const newTask: ITask = {
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    ...data,
  };

  await addTodo(newTask);

  // atualiza Zustand local
  taskState.set((tasks)=> [...tasks,newTask]);
};

// ---------------------------
// Edit Task
// ---------------------------
export async function updateTask(id: string, updates: Partial<ITask>) {
  const updatedTask = await editTodo({id, ...updates} as ITask);
  /* await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(updates),
  }); */

  taskState.set((tasks) =>
    tasks.map((t) => (t.id === id ? updatedTask : t))
  );
}

// ---------------------------
// Delete Task
// ---------------------------
export async function removeTask(id: string) {
  await deleteTodo(id);

  taskState.set((tasks) => tasks.filter((t) =>t.id !== id));
}
