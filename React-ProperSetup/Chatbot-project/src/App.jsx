import { useState,useRef,useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import LoadingImage from './assets/loading-spinner.gif'
import './App.css'
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
    /*
        ->Components means nothing but peice of our website. 
        ->This is an similar to a function in Java Script.
        ->We can re-use the components Many times this makes create's website easier.
    */
    function ChatMessage(props) // This is an simple example 'Component with props'. Props Make the Component More reuseable.  
    {
      const {message}=props; // same as 'cosnt message = props.message'
      const {sender}=props;  // This Feature is called Destructuring
      /*if(sender==="user")
      {
          return(
              <div>
                  {message}
                  <img src="user.png" width="50"/>
              </div>
          );
      }
      else{
          return(
              <div>
                  <img src="robot.png" width="50"/>
                  {message}    
              </div>
          );
      }
      */
      if (!message) return (null);
      return( // This return Statement is an short-cut for above if-else statement 
          <div
              className={
                  sender==='user' ? "chat-message-user" : "chat-message-robot"
              }
          > {/* In JSX We can't able put directly if else statement. Instead of that we can use && operator.*/}
              {
                  sender === 'robot' && <img src={RobotProfileImage} className="chat-message-profile"/>}
              <div className="chat-message-text">
                  {message}     
              </div>
              {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile"/>}    
          </div>
      );
    }
          // To use a function as a hook, the function name must
  // start with "use".
  function useAutoScroll([dep]) {
    // It's highly recommend to rename this to something
    // more generic like containerRef. This will make the
    // code make more sense if we ever reuse this code in
    // other components.
    const containerRef = useRef(null);
      useEffect(()=>{
        const containerElem = containerRef.current;
        if(containerElem)
        {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
      }, [dep]);

      return containerRef;
    }

  function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll([chatMessages]);

        return(
            <div className="chat-messages-container" 
            ref={chatMessagesRef}>
                {chatMessages.map((chatMessage)=>
                    {
                        return(
                            <ChatMessage 
                                message={chatMessage.message} 
                                sender={chatMessage.sender}
                                key={chatMessage.id}
                            />
                        );
                    })
                }
            </div>
        );
    }
  function App()
  {
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
