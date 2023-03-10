
export default function Modal({toggleModal}) {
  return(
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        <h2>Hola mundo</h2>
        <button className="close-modal" onClick={toggleModal}>close</button>
      </div>
    </div>
  );

}