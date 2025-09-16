import CounterApp from "./exercises/useState/CounterApp";
function App() {

  const [name, setName] = useState("Mario");

  return (
    <>
      <CounterApp />

    </>
  );
}

export default App;