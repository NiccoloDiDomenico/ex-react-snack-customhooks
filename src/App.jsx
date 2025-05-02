import useSwitch from "./customHooks/useSwitch";
import useDate from "./customHooks/useDate";


function App() {
  // const [isOn, toggle] = useSwitch();
  const currentDate = useDate();


  return (
    <>
      {/* Snack 1 */}
      {/* <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div> */}

      {/* Snack 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  )
}

export default App
