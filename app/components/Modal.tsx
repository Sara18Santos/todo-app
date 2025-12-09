interface ModalProps {
  modalOpen: boolean; // true or false
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="modal-box">
        {children}
        <div className="modal-action">
          
        </div>
        <button className="btn" onClick={() => setModalOpen(false)}>
            Close
          </button>
      </div>
    </div>
  );
};

export default Modal;
