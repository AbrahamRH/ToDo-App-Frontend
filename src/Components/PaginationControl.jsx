import "../Assets/Styles/PaginationControl.css";
import { useContext } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function PaginationControl() {
  const { pagesInfo, selectPage, nextPage, prevPage, firstPage, lastPage } =
    useContext(TodoContext);

  const buttons = []

  for (let i = 0; i < pagesInfo.totalPages ; i++){
    buttons.push(i)
  }

  return (
    <div className="pagination-controls">
      <button onClick={firstPage}  className="go-to-first" >{"<<"}</button>
      <button onClick={prevPage}   className="got-to-prev">{"<"}</button>
      {buttons.map((number) => {
        if(number === pagesInfo.number){
          return <button onClick={ () => { selectPage(number) }} key={number} className="current-page">{number + 1}</button>
        } else {
          return <button onClick={ () => { selectPage(number) }} key={number} className="item-page">{number + 1}</button>
        }
      })}
       <button onClick={nextPage} className="go-to-next hidden">{">"}</button>
       <button onClick={lastPage} className="go-to-last">{">>"}</button>
    </div>
  );
}
