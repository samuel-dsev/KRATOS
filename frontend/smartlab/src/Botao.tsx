interface BotaoProps {
  texto: string
  enviar: () => void;
}

function Botao({ enviar }: BotaoProps) {
  return (
    <button onClick={enviar}>
      Enviar
    </button>
  );
}

export default Botao;