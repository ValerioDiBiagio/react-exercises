import React, { useState } from "react";

export default function LiveInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                type="text"
                value={text}         // TODO: collega il valore dello state
                onChange={/* TODO: aggiorna text */(e) => setText(e.target.value)}
                placeholder="Scrivi qualcosa..."
            />

            <p>Hai scritto: {text} </p>       {/* Mostra il testo */}
            <p>Numero di caratteri: {text.length}</p>  {/* Mostra la lunghezza */}
        </div>
    );
}