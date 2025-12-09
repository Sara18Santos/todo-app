import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache:'no-store'});

    const todos: ITask[] = await res.json();
    return todos;

  };

export default getAllTodos;

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(todo)
  });
  const newTodo = await res.json();
  return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(todo)
  });
  const updatedTodo = await res.json();
  return updatedTodo;
}

/* export const deleteTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'DELETE', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(todo)
  });
  const newTodo = await res.json();
  return newTodo;
}
 */

