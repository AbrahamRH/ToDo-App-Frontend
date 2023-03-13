export default function TodoRow({ todo }) {
  return (
    <tr>
      <td>{todo.done}</td>
      <td>{todo.name}</td>
      <td>{todo.priority}</td>
      <td>{todo.dueDate}</td>
      <td className="button-data">
        <button>Update</button> <button>Delete</button>
      </td>
    </tr>
  );
}