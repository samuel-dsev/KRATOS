interface ClearButtonProps {
    clear: () => void;
}

function ClearButton({ clear }: ClearButtonProps) {
  return (
    <button onClick={clear}>
      Limpar
    </button>
  );
}

export default ClearButton;