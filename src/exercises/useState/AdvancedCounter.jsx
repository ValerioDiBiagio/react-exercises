import React, { useState } from "react";

export default function AdvancedCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // TODO: aumenta count di 1
        setCount(count + 1)
    };

    const decrement = () => {
        // TODO: diminuisci count di 1
        setCount(count - 1)
    };

    return (
        <div>
            <h2>Contatore: {count}</h2>

            {/* TODO: aggiungi due bottoni per increment, decrement  */}
            <button onClick={increment}>
                Incrementa
            </button>

            <button onClick={decrement}>
                Decrementa
            </button>

        </div>
    );
}