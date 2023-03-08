
export default function NameForm({enviarDatos }) {
  return (
    <label>
      Name:
      <input
        type="text"
        name="name"
        className="controlName"
        onChange={enviarDatos}
      ></input>
    </label>
  );
}
