export default function GreetingFour({ name, age }) {
    return (
        <div>
            {/* TODO: mostra il messaggio di saluto usando name */}
            <p>Ciao {name}!</p>

            {/* TODO: se age è presente, mostrala */}
            {age && <p>Hai {age} anni</p>}
        </div>
    );
}