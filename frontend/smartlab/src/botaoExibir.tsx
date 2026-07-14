import { useState } from "react";

interface botaoExibirProps {
  lista: string[]
}

function BotaoExibir({ lista }: botaoExibirProps) {
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
                <li key={index}>{item}</li>
            ))}
        </ul>)
      }
    </div>
  );
}
export default BotaoExibir;