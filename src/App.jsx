import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";

const App = () => {

  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container">
      <div className="chatbot-popup">
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
          
          {chatHistory.map((chat,index ) => (
            <ChatMessage />
          ))}

          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;