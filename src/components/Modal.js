const Modal = ({onCancel, onConfirm}) => {

  const cancel = () => {
    onCancel();
  }
  const confirm = () => {
    onConfirm();
  }

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <div className="action">
        <button className="btn btn-alt" onClick={cancel}>Cancel</button>
        <button className="btn" onClick={confirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
