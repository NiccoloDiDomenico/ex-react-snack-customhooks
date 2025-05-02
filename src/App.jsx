import useSwitch from "./customHooks/useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <>
      {/* Snack 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </>
  )
}

export default App
