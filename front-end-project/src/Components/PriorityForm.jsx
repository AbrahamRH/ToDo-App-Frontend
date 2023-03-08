export default function PriorityForm({ enviarDatos }) {
  return (
    <label>
      Priority: 
      <select name="priority" onChange={enviarDatos}>
        <option value="">All, High, Medium, Low</option>
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </label>
  );
}
