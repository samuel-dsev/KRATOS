interface InputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ text, setText }: InputProps) {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Input;