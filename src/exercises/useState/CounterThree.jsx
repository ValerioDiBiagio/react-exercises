import { useState } from "react";

function CounterThree() {
    const [count, setCount] = useState(0);

    function incrementa() {
        setCount(count + 1);
    }

    return (
        <>
            <p> Valore: {count}</p>

            <button onClick={incrementa}>
                Incrementa
            </button>
            {/* TODO: mostra count e aggiungi un bottone che lo incrementa */}
        </>

    )
}

export default CounterThree;