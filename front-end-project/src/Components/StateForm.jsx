export default function StateForm({ sendData }) {
  return (
    <>
      <label for="state" className="controls_label_state">State:</label>
      <select className="controls_state" name="state" onChange={sendData}>
        <option value="">All, Done, Undone</option>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Undone">Undone</option>
      </select>
    </>
  );
}
