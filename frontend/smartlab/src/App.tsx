import { useState } from "react";
import Input from "./input"
import Button from "./sendButton";
import ShowButton from "./showButton";
import ClearButton from "./clearButton";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);

  function send() {
    setList([...list, text]);
    setText("");
  }
  function clear() {
    setList([]);
  }
  function deleteButton(index: number) {
    setList(previousList =>
      previousList.filter((_, currentIndex) => {
        return currentIndex !== index;
  })
);
  }

  return (
    <div className="app-card">
      <Input text={text} setText={setText} />
      <Button send={send} />
      <ClearButton clear={clear} />
      <ShowButton list={list} deleteButton={deleteButton}/>
    </div>
  );
}

export default App;
