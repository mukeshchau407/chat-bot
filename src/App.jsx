import ChatbotIcon from "./components/ChatbotIcon";

const App = () => {
  return (
    <div className="container">
      <div className="catbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <div className="logo-text">Chatbot</div>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
