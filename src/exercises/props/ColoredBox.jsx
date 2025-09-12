// ColoredBox.jsx
export default function ColoredBox(props) {
    const backgroundColor = props.backgroundColor
    const backgroundText = props.backgroundText
    return (
        <div
            style={{
                // TODO: imposta backgroundColor
                backgroundColor,
                width: "150px",
                height: "150px",
            }}
        >
            {/* TODO: puoi anche mostrare il colore come testo */ backgroundText}
        </div>
    );
}