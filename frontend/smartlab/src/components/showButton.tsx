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
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState("")

  function startEdit(id: number, text: string) {
    setEditingId(id)
    setEditingText(text)
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {showList ? <span>Fechar</span> : <span>Exibir</span>}
      </button>
      {showList &&
      (<ul>
            {list.map((todo) => (
                <li key={todo.id}>{todo.id === editingId ? <input value={editingText} onChange={(e) => setEditingText(e.target.value)}></input> : todo.text  }
                  <button onClick={() => deleteItem(todo.id)}>Excluir</button> 
                  <button onClick={() => startEdit(todo.id, todo.text)}> Editar </button>                
                </li>
            ))}
        </ul>)
      }
    </div>
  );
}
export default ShowButton;