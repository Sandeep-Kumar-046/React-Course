import { useState , useEffect} from 'react'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'
  function App()
  {
    useEffect(()=>{
        Chatbot.addResponses({
          'goodbye':'Goodbye. Have a great day!',
          'give me a unique id':function()
          {
            return `Sure! Here is your Unique ID: ${crypto.randomUUID()}`;
          }
        })
    },[]);
    const [chatMessages, setChatMessages] = useState([]);        // const chatMessages=array[0];
    // const setChatMessages=array[1];
    return(
        <div className="app-container">
              {chatMessages.length === 0 && (
            <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
            </p>
            )}
        <ChatMessages 
            chatMessages={chatMessages}
        />
        <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />
        </div>
    );
  }

export default App
