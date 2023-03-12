export default function DateInput({ sendData }) {
  return (
    <>
      <label>Due Date: </label>
      <input
        type="date"
        name="dueDate"
        className="control_date"
        onChange={sendData}
      ></input>
    </>
  );
}
