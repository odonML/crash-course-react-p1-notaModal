import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ text }) => {
  const [showModal, setModal] = useState(false);

  const deleteHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  }

  const confirmModalHandler = () => {
    setModal(false);
  }
  return (
    <div className="card">
      <h2 className="t-card">{text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal ? <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler}/> : null}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};
export default Todo;
