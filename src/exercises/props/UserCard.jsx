// UserCard.jsx
export default function UserCard(props) {

    const name = props.name
    const age = props.age
    return (
        <div>
            Nome: {/* TODO: mostra qui props.name */ name}
            Età: {/* TODO: mostra qui props.age */ age}
        </div>
    );
}