// Counter.jsx
import { useEffect, useState } from "react";

export default function Counter() {
  // TODO: inizializza uno stato "count" a 0
  const [count, setCount] = useState(0);

  function incrementa() {
    setCount(count + 1);
  }

  useEffect(incrementa, []);

  return (
    <div>
      <p>Valore: {/* TODO: mostra count */ count}</p>
      <button onClick={incrementa}>
        Incrementa
      </button>
    </div>
  );
}