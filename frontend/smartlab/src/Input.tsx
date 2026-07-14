interface InputProps {
  texto: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ texto, setTexto }: InputProps) {
  return (
    <input
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}

export default Input;