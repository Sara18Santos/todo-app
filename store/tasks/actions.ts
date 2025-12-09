import { ITask } from "@/types/tasks";
import { taskState } from "@/store/tasks/state";

export function addTask(task: ITask) {
  taskState.set((prev) => [...prev, task]);
}

export function removeTask(id: string) {
  taskState.set((prev) => prev.filter((t) => t.id !== id));
}

export function updateTask(id: string, updates: Partial<ITask>) {
  taskState.set((prev) =>
    prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
  );
}
