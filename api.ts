import TodoList from "./app/components/TodoList";
import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`);

    const todos: ITask[] = await res.json();
    return todos;

  };

/* export default getAllTodos; */

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(todo)
  });
  const newTodo = await res.json();
  return newTodo;
}
