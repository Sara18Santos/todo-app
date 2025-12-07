'use client'
import { GoPlus } from "react-icons/go";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskvalue, setNewTaskValue] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(newTaskvalue);
    setNewTaskValue("");
  }


  return (
    <div>
      <button onClick={()=>setModalOpen(true)} className="btn btn-primary w-full"> Add new Task <GoPlus className="ml-2" size={15}/> </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onClick={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input value={newTaskvalue}
            onChange={e => setNewTaskValue(e.target.value)}
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full" />
            <button type='submit' className="btn">Submit</button>
          </div>
        </form>
      </Modal>
    </div>

  )
}

export default AddTask
