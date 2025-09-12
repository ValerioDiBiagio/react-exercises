// InputMirror.jsx
import { useState } from "react";

export default function InputMirror() {
    // TODO: dichiara una variabile di stato 'text' inizializzata a stringa vuota
    const [text, setText] = useState("");



    return (
        <div>
            <input
                type="text"
                // TODO: aggiorna 'text' a ogni cambiamento nell'input
                onChange={(e) => setText(e.target.value)}
            />
            <p>
                Hai scritto: {/* TODO: mostra qui il contenuto di text */text}
            </p>
        </div>
    );
}