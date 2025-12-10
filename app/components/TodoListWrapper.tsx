"use client"
import { useEffect } from "react"
import { useTaskStore } from "@/store/tasks/state"
import TodoList from "./TodoList"
import { ITask } from "@/types/tasks"

interface WrapperProps{
    tasks:ITask[];
}

export default function TodoListWrapper({tasks}: WrapperProps){
    const setTasks = useTaskStore((s)=> s.setTasks);
    useEffect(() => {
        setTasks(tasks);
    }, [tasks, setTasks]);
    const storeTasks = useTaskStore((s) => s.tasks);
    return <TodoList tasks={storeTasks} />;
}