import { useEffect } from "react";

export default function WelcomeThree(/* TODO 3: ricevi la prop name */ { name }) {
    // TODO 4: useEffect senza dipendenze → stampa "Nome iniziale: {name}"
    useEffect(() => {
        console.log("Nome iniziale:", name);
    }, []);

    // TODO 5: useEffect con [name] → stampa "Nome aggiornato: {name}"

    useEffect(() => {
        console.log("Nome aggiornato:", name);
    }, [name]);


    return (
        <div className="p-4 border rounded-lg shadow">
            <h1 className="text-xl">Benvenuto, {/* TODO 6: mostra il name */name}!</h1>
        </div >
    );
}