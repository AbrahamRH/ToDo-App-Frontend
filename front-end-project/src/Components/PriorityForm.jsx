import "../Assets/Styles/PriorityForm.css";

export default function PriorityForm({ sendData }) {
  return (
    <>
      <label htmlFor="priority" className="controls_label_priority">Priority:</label>
      <select className="controls_priority" name="priority" onChange={sendData}>
        <option value="">All, High, Medium, Low</option>
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </>
  );
}
