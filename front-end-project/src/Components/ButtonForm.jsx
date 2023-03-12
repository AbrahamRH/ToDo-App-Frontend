export default function ButtonForm({sendData, message}){
  return(
      <button onClick={sendData} className="controls_button">{message}</button>
  )
}