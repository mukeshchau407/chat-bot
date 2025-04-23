const ChatForm = () => {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMassage = inputRef.current.value.trim();
        if(!userMassage) return;
        inputRef.current.value = "";

        console.log(userMassage);
    }

  return (
<form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
            <button className="material-symbols-rounded">arrow_upward</button>
          </form>  )
}

export default ChatForm