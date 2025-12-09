import { ITask } from "@/types/tasks";
import { taskState } from "@/store/tasks/state";

// Add Task

export async function addTask(task:ITask){
  await fetch("/api/tasks", {
    method: "POST", body: JSON.stringify(task),
  });

  // atualiza o estado local
  taskState.set((prev) => [...prev, task]);
}
