export default function NameForm({ sendData, isRequired }) {
  return (
    <>
      <label htmlFor="name" className="controls_label_name">
        Name:
      </label>
      <input
        type="text"
        name="name"
        className="controls_name"
        onChange={sendData}
        maxLength="120"
        required={isRequired}
      ></input>
    </>
  );
}
