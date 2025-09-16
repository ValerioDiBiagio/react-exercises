import React, { useState } from 'react';


const CounterApp = () => {
    // 1. Dichiara una variabile di stato 'count' con useState, inizializzata a 0.
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        // 2. Aggiorna 'count' incrementandolo di 1.
        setCount(count + 1);

    };

    const handleDecrement = () => {
        // 3. Aggiorna 'count' decrementandolo di 1, ma solo se è maggiore di 0.
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>Il mio Contatore</h1>
            {/* 4. mostra count */count}

            <button onClick={handleIncrement}>Incrementa</button>
            <button onClick={handleDecrement}>Decrementa</button>
        </div>
    );
};

export default CounterApp;