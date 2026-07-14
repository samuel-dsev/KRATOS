interface SendButtonProps {
  send: () => void;
}

function sendButton({ send }: SendButtonProps) {
  return (
    <button onClick={send}>
      Enviar
    </button>
  );
}

export default sendButton;