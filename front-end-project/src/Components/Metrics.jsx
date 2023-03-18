import { useEffect, useState, useContext } from "react";
import { TodoContext } from "../Context/TodosContext";
import "../Assets/Styles/metrics.css";
import handleAPI from "../Utils/API";

export default function Metrics() {
  const { todosChange } = useContext(TodoContext);
  const [average, setAverage] = useState({
    totalAverage: 0,
    lowAverage: 0,
    mediumAverage: 0,
    highAverage: 0,
  });

  useEffect(() => {
    handleAPI("GET", "/todos/metrics").then((data) => {
      setAverage(data);
    });
  }, [todosChange]);

  const total = formatTime(average.totalAverage);
  const high = formatTime(average.highAverage);
  const medium = formatTime(average.mediumAverage);
  const low = formatTime(average.lowAverage);


  return (
    <div className="metrics-container">
      <div className="total-average">
        <h4>Average time to finish taks:</h4>
        <p>
          -{total.days > 0 && <span>Days: {total.days}</span>}
          {total.hours > 0 && <span>Hours: {total.hours}</span>}
          {total.minutes > 0 && <span>Mins: {total.minutes}</span>}
          {total.sec > 0 && <span>Secs: {total.sec}</span>}-
        </p>
      </div>
      <div className="priority-average">
        <h4>Average time to finish tasks by priority</h4>
        <ul>
          <li>
            Low: -{low.days > 0 && <span>Days: {low.days}</span>}
            {low.hours > 0 && <span>Hours: {low.hours}</span>}
            {low.minutes > 0 && <span>Mins: {low.minutes}</span>}
            {low.sec > 0 && <span>Secs: {low.sec}</span>}-
          </li>
          <li>
            Medium: -{medium.days > 0 && <span>Days: {total.days}</span>}
            {medium.hours > 0 && <span>Hours: {medium.hours}</span>}
            {medium.minutes > 0 && <span>Mins: {medium.minutes}</span>}
            {medium.sec > 0 && <span>Secs: {medium.sec}</span>}-
          </li>
          <li>
            High: -{high.days > 0 && <span>Days: {high.days}</span>}
            {high.hours > 0 && <span>Hours: {high.hours}</span>}
            {high.minutes > 0 && <span>Mins: {high.minutes}</span>}
            {high.sec > 0 && <span>Secs: {high.sec}</span>}-
          </li>
        </ul>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  return {
    sec: Math.floor(seconds % 60),
    minutes: Math.floor((seconds % 3600) / 60),
    hours: Math.floor((seconds % 86400) / 3600),
    days: Math.floor(seconds / 86400),
  };
}
