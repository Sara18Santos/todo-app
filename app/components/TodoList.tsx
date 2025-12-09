import { ITask } from "@/types/tasks"
import Task from "./Task"

/* import { GoPlus } from "react-icons/go"; */
interface TodoListProps{
    tasks: ITask[]
}
const TodoList: React.FC<TodoListProps>= ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task =>
                    <Task key={task.id} task={task}/>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default TodoList
