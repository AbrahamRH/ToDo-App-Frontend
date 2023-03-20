import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function SortButton({ field }) {
  const { sortTodos } = useContext(TodoContext);
  const [directionIndx, setDirectionIndx] = useState(0); //index of array [no, asc, desc]
  const directions = ["no", "asc", "desc"];

  const handleClick = () => {
    setDirectionIndx((directionIndx + 1) % 3);
  };

  useEffect(() => {
    sortTodos(field, directions[directionIndx]);
  },[directionIndx])

  return (
    <span className="sorting" onClick={handleClick}>
      <button className="btn-srt" onClick={handleClick}>
        {directionIndx === 0 && "⇅"}
        {directionIndx === 1 && "↑"}
        {directionIndx === 2 && "↓"}
      </button>
    </span>
  );
}
