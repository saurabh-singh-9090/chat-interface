import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from '../store/chatSlice';
import { v4 as uuidv4 } from 'uuid';

export const useSimulatedResponse = (activeChat, lastMessage) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!activeChat || !lastMessage || lastMessage.isOwn === false) return;

    const timer = setTimeout(() => {
      const responses = [
        "That's interesting!",
        "I see what you mean.",
        "Could you tell me more?",
        "Great point!",
        "Thanks for sharing that.",
        "I agree with you.",
        "That makes sense.",
        "Tell me more about that.",
        "I understand your perspective.",
        "That's a good observation."
      ];
      
      const usernames = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Wilson'];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
      
      const responseMessage = {
        id: uuidv4(),
        userId: `user${Math.floor(Math.random() * 100)}`,
        username: randomUsername,
        content: randomResponse,
        timestamp: new Date().toISOString(),
        isOwn: false
      };
      
      dispatch(receiveMessage({
        chatId: activeChat,
        message: responseMessage
      }));
    }, 1000 + Math.random() * 2000);

    return () => clearTimeout(timer);
  }, [dispatch, activeChat, lastMessage]);
}; 