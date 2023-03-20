export default function DateInput({ sendData }) {
  return (
    <>
      <label>Due Date: </label>
      <input
        type="date"
        name="dueDate"
        className="control_date"
        min="2023-03-01"
        max="2100-01-01"
        onChange={sendData}
      ></input>
    </>
  );
}
