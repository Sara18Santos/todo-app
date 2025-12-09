"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useMemo, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";
import StatusSelect from "./StatusSelect";
import { formatDDMMYYYY, isoToInputDate, inputDateToIso } from "@/utils/date";
interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const [status, setStatus] = useState(task.status);
  const [dueDateInput, setDueDateInput] = useState<string>(
    isoToInputDate(task.dueDate)
  );
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
      status: status,
      dueDate: inputDateToIso(dueDateInput),
      description: "",
      createdAt: "",
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };
  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };
  const getStatusBadgeClass = (status: string) => {
    // should create status in utils folder to reuse in task and AddTask
    switch (status.toLowerCase()) {
      case "doing":
        return "badge badge-info";
      case "review":
        return "badge badge-warning";
      case "done":
        return "badge badge-success";
      default:
        return "badge badge-outline";
    }
  };
  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td>
        <span className={getStatusBadgeClass(task.status)}>{task.status}</span>
      </td>
      <td>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">
            Created: {formatDDMMYYYY(task.createdAt)}
          </span>
          <span className="text-xs">Due: {formatDDMMYYYY(task.dueDate)}</span>
        </div>
      </td>

      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          size={20}
          className="text-blue-500"
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <div className="modal-action flex flex-col gap-3">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <StatusSelect value={status} onChange={setStatus} />
              <label className="label">
                <span className="label-text">Due date (optional)</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full"
                value={dueDateInput}
                onChange={(e) => setDueDateInput(e.target.value)}
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          size={20}
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action flex justify-center gap-4">
            <button
              className="btn btn-primary"
              onClick={() => handleDeleteTask(task.id)}
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
