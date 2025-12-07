'use client'
import { GoPlus } from "react-icons/go";
import Modal from "./Modal";
import { useState } from "react";
const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={()=>setModalOpen(true)} className="btn btn-primary w-full"> Add new Task <GoPlus className="ml-2" size={15}/> </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>

  )
}

export default AddTask
