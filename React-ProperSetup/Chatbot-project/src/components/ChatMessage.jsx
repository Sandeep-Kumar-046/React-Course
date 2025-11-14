import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile-1.jpg'
import './ChatMessage.css';
import dayjs from 'dayjs';
function ChatMessage({ message, sender, time }) // This is an simple example 'Component with props'. Props Make the Component More reuseable.  
{
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
                {time && (
                    <div className='chat-message-time'>
                    {dayjs(time).format('h:mma')}
                    </div>
                )}
            </div>
            {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile"/>}    
        </div>
    );
}

export default ChatMessage