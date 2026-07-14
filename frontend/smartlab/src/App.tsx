import { useState } from "react";
import Input from "./Input";
import Botao from "./Botao";
import BotaoExibir from "./botaoExibir";

function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  function enviar(){
    setLista([...lista, texto]);
    setTexto('')
  }

  return (
    <>
      <Input texto={texto} setTexto={setTexto} />
      <Botao texto={texto} enviar={enviar}/>
      <br/>
      <BotaoExibir lista={lista} />
    </>
  );
}

export default App;