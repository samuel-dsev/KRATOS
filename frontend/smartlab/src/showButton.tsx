import { useState } from "react";

interface ShowButtonProps {
  list: string[]
  deleteButton: (index: number) => void;
}

function ShowButton({ list, deleteButton }: ShowButtonProps) {
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
            {list.map((item, index) => (
                <li key={index}>{item} <button onClick={() => deleteButton(index)}>Excluir</button> </li>
            ))}
        </ul>)
      }
    </div>
  );
}
export default ShowButton;