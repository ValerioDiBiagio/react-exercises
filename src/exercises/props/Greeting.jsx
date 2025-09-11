import { useState } from "react";

export default function Greeting({ initialName }) {
    // TODO: crea uno stato "name" inizializzato con initialName
    const [name, setName] = useState(initialName);

    return (
        <div>
            <p>Ciao, { /* TODO: mostra name */ name}</p>
            <input
                type="text"
                value={/* TODO: value input */name}
                onChange={/* TODO: aggiorna name */(e) => setName(e.target.value)}
            />
        </div>
    );
}