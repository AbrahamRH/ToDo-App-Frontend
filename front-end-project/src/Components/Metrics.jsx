import "../Assets/Styles/metrics.css"

export default function Metrics() {
  return(
    <div className="metrics-container">
      <div className="total-average">
        <h4>Average time to finish taks:</h4>
        <p>time</p>
      </div>
      <div className="priority-average">
        <h4>Average time to finish tasks by priority</h4>
        <ul>
          <li>Low</li>
          <li>Medium</li>
          <li>High</li>
        </ul>

      </div>

    </div>

  )

}