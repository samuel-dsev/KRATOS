import { useState } from "react";

interface botaoExibirProps {
  lista: string[]
  excluir: (index: number) => void;
}

function BotaoExibir({ lista, excluir }: botaoExibirProps) {
  const [exibir, setExibir] = useState(false)
  const handleToggle = () => {
    setExibir(!exibir);
  };


  return (
    <div>
      <button onClick={handleToggle}>
        {exibir ? <span>Fechar</span> : <span>Exibir</span>}
      </button>
      {exibir &&
      (<ul>
            {lista.map((item, index) => (
                <li key={index}>{item} <button onClick={() => excluir(index)}>Excluir</button> </li>
            ))}
        </ul>)
      }
    </div>
  );
}
export default BotaoExibir;