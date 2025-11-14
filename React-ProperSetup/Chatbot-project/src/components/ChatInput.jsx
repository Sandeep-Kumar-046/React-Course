import { useState} from "react";
import { Chatbot } from "supersimpledev";
import LoadingImage from '../assets/loading-spinner.gif'
import './ChatInput.css';

function ChatInput({chatMessages,setChatMessages}) // This is an component example in React without props
{
    const [inputText,setInputText]= useState('');
    const [isLoading, setIsLoading] = useState(false);
    function saveInputText(event)
    {
        setInputText(event.target.value);
    }
    async function sendMessage()
    {
        if (isLoading || inputText === '') {
            return;
        }

        // Set isLoading to true at the start, and set it to
        // false after everything is done.
        setIsLoading(true);
        const newChatMessages=[
            ...chatMessages,
            {
                message:inputText,
                sender:"user",
                id:crypto.randomUUID()
            },
            {
                message: <img src={LoadingImage} className="loading-image"/>,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ];
        setChatMessages(newChatMessages);
        setInputText('');
        const response= await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages.slice(0, newChatMessages.length - 1),
            {
                message:response,
                sender:'robot',
                id:crypto.randomUUID()
            },
        ]);
        setInputText('');
        setIsLoading(false);
    }
    function handleKeyDown(event)
    {
        if(event.key==='Enter')
        {
            sendMessage();
        }else if(event.key==="Escape")
        {
            setInputText('');
        }
    }
    return (
        <div className="chat-input-container">
            <input placeholder="Send a message to Chatbot" size="30"
            onChange={saveInputText}
            onKeyDown={handleKeyDown}
            value={inputText}
            className="chat-input"
            ></input>
            <button 
                onClick={sendMessage}
                className="send-button">Send</button>    
        </div>
    );
}

export default ChatInput