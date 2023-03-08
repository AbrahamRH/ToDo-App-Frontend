export default function StateForm({ enviarDatos }) {
  return (
    <label>
      State:
      <select value="All" onChange={enviarDatos}>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Undone">Undone</option>
      </select>
    </label>
  );
}
