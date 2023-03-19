import { useState, useContext } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function SortButton({ field }) {
  const {  } = useContext(TodoContext);
  const [direction, setDirection] = useState(0); //index of array [no, asc, desc]
  const directions = ["no", "asc", "desc"];

  const handleClick = (e) => {
    setDirection((direction + 1) % 3);
  };

  return (
    <span className="sorting" onClick={handleClick}>
      <button className="btn-srt" onClick={handleClick}>
        {directions[direction] === "no" && "⇅"}
        {directions[direction] === "asc" && "↑"}
        {directions[direction] === "desc" && "↓"}
      </button>
    </span>
  );
}
