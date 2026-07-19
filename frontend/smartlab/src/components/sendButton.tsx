interface SendButtonProps {
  send: () => void;
}

function SendButton({ send }: SendButtonProps) {
  return (
    <button onClick={send}>
      Enviar
    </button>
  );
}

export default SendButton;