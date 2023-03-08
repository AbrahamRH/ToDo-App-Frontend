export default function PriorityForm({ enviarDatos }) {
  return (
    <label>
      Priority: 
      <select value="All" onChange={enviarDatos}>
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </label>
  );
}
