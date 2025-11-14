import {useRef,useEffect } from 'react'
import ChatMessage from './ChatMessage';
function useAutoScroll([dep]) {
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

export default ChatMessages