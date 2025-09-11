import { useEffect } from "react";

export default function Logger() {
  // TODO: usa useEffect per stampare "Componente montato" quando il componente viene montato
  useEffect(() => {
    console.log("Componente montato");

  }, []);

  return <p>Controlla la console</p>;
}