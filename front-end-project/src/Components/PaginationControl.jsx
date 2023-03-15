import "../Assets/Styles/PaginationControl.css";
import { useContext } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function PaginationControl() {
  const { pagesInfo, selectPage, nextPage, prevPage, firstPage, lastPage } =
    useContext(TodoContext);
  return (
    <div className="pagination-controls">
      <button onClick={firstPage}>{"<<"}</button>
      <button onClick={prevPage}>{"<"}</button>
      <button onClick={firstPage}>1</button>
      <button onClick={selectPage}>{pagesInfo.number + 1}</button>
      <button onClick={lastPage}>{pagesInfo.totalPages}</button>
      <button onClick={nextPage}>{">"}</button>
      <button onClick={lastPage}>{">>"}</button>
    </div>
  );
}
