// Toggle.jsx
import { useState } from "react";

export default function Toggle() {
    // TODO: dichiara una variabile di stato 'isOn' inizializzata a false
    const [isOn, setIsOn] = useState(false)


    function toggle() {
        // TODO: cambia il valore di 'isOn' da true a false e viceversa
        setIsOn(prev => !prev)

    }

    return (
        <div>
            <p>Stato: {/* mostra qui "ON" se isOn è true, altrimenti "OFF" */} {isOn ? "On" : "Off"} </p>
            <button
                // TODO: al click esegui la funzione toggle
                onClick={toggle}
            >
                Cambia Stato
            </button>
        </div>
    );
}