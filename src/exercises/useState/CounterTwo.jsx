// Counter.jsx
import { useState } from "react";

export default function Counter() {
    // TODO: dichiara una variabile di stato 'count' inizializzata a 0
    const [count, setCount] = useState(0);

    function incrementa() {
        setCount(count + 2)
    }

    function decrementa() {
        setCount(count - 2)
    }

    return (
        <div>
            <p>Valore: {/* mostra qui il valore di count */count}</p>
            <button onClick={incrementa}
            // TODO: al click incrementa il valore di count di 2
            >
                Aumenta
            </button>

            <button onClick={decrementa}>
                Diminuisci
            </button>
        </div>
    );
}