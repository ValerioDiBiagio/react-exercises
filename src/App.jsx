import CounterButton from "./exercises/props/CounterButton";

function App() {
  function handleIncrement() {
    console.log("Incrementato!");
  }

  return (
    <>
      <CounterButton increment={handleIncrement} />

    </>
  );
}

export default App;