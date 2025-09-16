import React, { useEffect, useState } from 'react';


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

    // TODO 1: usa useEffect senza dipendenze per stampare "Componente montato"
    //         e aggiungi anche il return per stampare "Componente smontato"

    useEffect(() => {
        console.log("Componente montato")

        return () => {
            console.log("Componente smontato")
        }

    }, []);

    // TODO 2: usa useEffect con dipendenza [count]
    //         per stampare in console "Il contatore è: X"

    useEffect(() => {
        console.log("Il contatore è:", count)
    }, [count]);

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