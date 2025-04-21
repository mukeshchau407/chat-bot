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
      </div>
    </div>
  );
};

export default App;
