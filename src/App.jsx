import useSwitch from "./customHooks/useSwitch";
import useDate from "./customHooks/useDate";
import useCustomPointer from "./customHooks/useCustomPointer";
import useKeyPress from "./customHooks/useKeyPress";


function App() {
  // const [isOn, toggle] = useSwitch();
  // const currentDate = useDate();
  // const customPointer = useCustomPointer("🔥");
  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
      {/* Snack 1 */}
      {/* <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div> */}

      {/* Snack 2 */}
      {/* <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div> */}

      {/* Snack 3 */}
      {/* <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer} */}

      {/* Bonus */}
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </>
  )
}

export default App
