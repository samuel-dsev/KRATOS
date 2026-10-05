import { useState } from "react";
import { TodoItem } from "../types/todoItem";
interface ShowButtonProps {
  saveEdit: (text: string) => void;
  list: TodoItem[];
  deleteItem: (id: number) => void;
  editingId: number | null;
  editingText: string;
  setEditingId: (id: number | null) => void;
  setEditingText: (text: string) => void;
}
function ShowButton({ list, deleteItem, editingId, editingText, setEditingId, setEditingText }: ShowButtonProps) {
  const [showList, setShowList] = useState(false)
  const handleToggle = () => {
    setShowList(!showList);
  };
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
                <li key={todo.id}>
                  {todo.id === editingId ? <input value={editingText} onChange={(e) => setEditingText(e.target.value)}></input> : todo.text  }
                  <button onClick={() => deleteItem(todo.id)}>Excluir</button> 

                  <button onClick={() => startEdit(todo.id, todo.text)} 
                    > Editar </button>     

                </li>
            ))}
        </ul>)
      }
    </div>
  );
}
export default ShowButton;