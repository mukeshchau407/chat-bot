const ChatMessage = ({chat}) => {
  return (
    <div className={`message ${chat.role ===  "mode" ? 'bot' : 'user'}-message`}>
      <p className="message-text">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>
  );
};

export default ChatMessage;
