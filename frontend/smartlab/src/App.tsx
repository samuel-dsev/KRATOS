import { useState } from "react";
import Input from "./Input";
import Botao from "./Botao";
import BotaoExibir from "./botaoExibir";
import BotaoLimpar from "./botaoLimpar";

function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState<string[]>([]);


  function enviar() {
    setLista([...lista, texto]);
    setTexto("");
  }

  function limpar() {
    setLista([]);
  }

  function botaoExcluir(index: number) {
    setLista(listaAnterior =>
      listaAnterior.filter((_, indiceAtual) => {
        return indiceAtual !== index;
  })
);
  }

  return (
    <>
      <Input texto={texto} setTexto={setTexto} />
      <Botao texto={texto} enviar={enviar} />
      <br />
      <BotaoLimpar limpar={limpar} />
      <BotaoExibir lista={lista} excluir={botaoExcluir}/>
    </>
  );
}

export default App;
