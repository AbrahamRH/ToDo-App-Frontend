export default function NameForm({ sendData }) {
  return (
    <>
      <label htmlFor="name" className="controls_label_name">Name:</label>
      <input
        type="text"
        name="name"
        className="controls_name"
        onChange={sendData}
      ></input>
    </>
  );
}
