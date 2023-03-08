export default function StateForm({ enviarDatos }) {
  return (
    <label>
      State:
      <select name="state" onChange={enviarDatos}>
        <option value="">All, Done, Undone</option>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Undone">Undone</option>
      </select>
    </label>
  );
}
