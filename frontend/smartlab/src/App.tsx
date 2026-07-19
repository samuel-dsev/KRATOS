import { useState } from "react";
import { TodoItem } from "../src/types/todoItem";
import Input from "../src/components/input";
import SendButton from "../src/components/sendButton";
import ShowButton from "../src/components/showButton";
import ClearButton from "../src/components/clearButton";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<TodoItem[]>([]);
  const [nextId, setNextId] = useState(1);

  function send() {
    if (text.trim() !== "") {
      setList([...list, {
        id: nextId,
        text
      }]);
      setNextId(nextId + 1)
      setText("");
    }
  }


  function clear() {
    setList([]);
  }
  function deleteItem(id: number) {
    setList(previousList =>
      previousList.filter(item => item.id !== id)
);
  }

  return (
    <div className="app-card">
      <Input text={text} setText={setText} />
      <SendButton send={send} />
      <ClearButton clear={clear} />
      <ShowButton list={list} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
