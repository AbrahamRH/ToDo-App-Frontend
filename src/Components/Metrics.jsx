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
          {total.days > 0 && <span>{total.days} days</span>}
          {total.hours > 0 && <span>{total.hours} hours </span>}
          {total.minutes > 0 && <span>{total.minutes} minutes</span>}
          {total.sec > 0 && <span>{total.sec} seconds</span>}
        </p>
      </div>
      <div className="priority-average">
        <h4>Average time to finish tasks by priority</h4>
        <ul>
          <li>
            Low: {low.days > 0 && <span>{low.days} days</span>}
            {low.hours > 0 && <span>{low.hours} hours</span>}
            {low.minutes > 0 && <span>{low.minutes} minutes</span>}
            {low.sec > 0 && <span>{low.sec} seconds</span>}
          </li>
          <li>
            Medium: {medium.days > 0 && <span> {total.days} days</span>}
            {medium.hours > 0 && <span>{medium.hours} hours</span>}
            {medium.minutes > 0 && <span>{medium.minutes} minutes</span>}
            {medium.sec > 0 && <span>{medium.sec} seconds</span>}
          </li>
          <li>
            High: {high.days > 0 && <span>{high.days} days</span>}
            {high.hours > 0 && <span>{high.hours} hours</span>}
            {high.minutes > 0 && <span>{high.minutes} minutes</span>}
            {high.sec > 0 && <span>{high.sec} seconds</span>}
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
