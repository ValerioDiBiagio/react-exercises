import { useState } from "react";

function TextInput() {
    const [text, setText] = useState("");

    return (
        <>
            <p>Valore: {text}</p>
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </>
    )

    // TODO: collega un input al valore di text
    // e mostra il testo sotto
}

export default TextInput;