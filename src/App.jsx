import { useState } from "react";
import WelcomeThree from "./exercises/props/WelcomeThree";
function App() {

  const [name, setName] = useState("Mario");

  return (
    <>
      {/* TODO 2: passa la prop name al componente figlio */}
      <WelcomeThree name={name} />

      <button
        onClick={() => setName("Luigi")}
        className="px-3 py-1 rounded bg-blue-500 text-white"
      >
        Cambia nome
      </button>

    </>
  );
}

export default App;