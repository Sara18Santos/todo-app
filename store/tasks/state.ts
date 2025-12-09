import { create } from "zustand";
import { ITask } from "@/types/tasks";

interface TaskStore {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));

export const taskState = {
  get: () => useTaskStore.getState().tasks,
   set: (fn: (tasks: ITask[]) => ITask[]) => {
    const { tasks, setTasks } = useTaskStore.getState();
    const updated = fn(tasks);
    setTasks(updated);
  },
};
