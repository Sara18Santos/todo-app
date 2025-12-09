"use client";
import { GoPlus } from "react-icons/go";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import StatusSelect from "./StatusSelect";
import { inputDateToIso } from "@/utils/date";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskvalue, setNewTaskValue] = useState<string>("");
  const [status, setStatus] = useState("Doing"); // default value
  const [dueDateInput, setDueDateInput] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskvalue,
      status: status,
      createdAt: new Date().toISOString(),
      dueDate: inputDateToIso(dueDateInput),
      description: description.trim() || undefined, //send only if filled
    });
    setNewTaskValue("");
    setStatus("Doing");
    setDueDateInput("");
    setDescription("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        {" "}
        Add new Task <GoPlus className="ml-2" size={15} />{" "}
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action flex flex-col gap-3">
            <input
              value={newTaskvalue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
            <label className="label">
              <span className="label-text">Description (optional)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Add context, notes, ..."
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
