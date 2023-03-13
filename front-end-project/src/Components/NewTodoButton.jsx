import Modal from "./Modal";
import '../Assets/Styles/modal.css'
import { useState } from "react";

export default function NewTodoButton() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        + New To Do
      </button>
      {modal && <Modal toggleModal={toggleModal} />}
    </>
  );
}
