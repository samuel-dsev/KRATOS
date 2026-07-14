interface BotaoLimparProps {
    limpar: () => void;
}

function BotaoLimpar({ limpar }: BotaoLimparProps) {
  return (
    <button onClick={limpar}>
      Limpar
    </button>
  );
}

export default BotaoLimpar;