interface ModalProps{
  modalOpen: boolean // true or false
  setModalOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open": ""}`}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click  button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
