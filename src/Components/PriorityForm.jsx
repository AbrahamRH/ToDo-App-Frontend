import "../Assets/Styles/PriorityForm.css";

export default function PriorityForm({ sendData }) {
  return (
    <>
      <label htmlFor="priority" className="controls_label_priority">Priority:</label>
      <select className="controls_priority" name="priority" onChange={sendData}>
        <option value="">All, High, Medium, Low</option>
        <option value="ALL">All</option>
        <option value="HIGH">High</option>
        <option value="MEDIUM">Medium</option>
        <option value="LOW">Low</option>
      </select>
    </>
  );
}
