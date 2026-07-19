import { useState } from "react";
import { TodoItem } from "../types/todoItem";
interface ShowButtonProps {
  list: TodoItem[];
  deleteItem: (id: number) => void;
}

function ShowButton({ list, deleteItem }: ShowButtonProps) {
  const [showList, setShowList] = useState(false)
  const handleToggle = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showList ? <span>Fechar</span> : <span>Exibir</span>}
      </button>
      {showList &&
      (<ul>
            {list.map((todo) => (
                <li key={todo.id}>{todo.text} <button onClick={() => deleteItem(todo.id)}>Excluir</button> </li>
            ))}
        </ul>)
      }
    </div>
  );
}
export default ShowButton;