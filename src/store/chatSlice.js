import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Sample data for demonstration
const sampleChats = [
  {
    id: '1',
    name: 'Saurabh Singh',
    lastMessage: 'Hello there!',
    timestamp: new Date().toISOString(),
    messages: [
      {
        id: '1',
        userId: 'user1',
        username: 'John Doe',
        content: 'Hello there!',
        timestamp: new Date(Date.now() - 10000).toISOString(),
        isOwn: false
      },
      {
        id: '2',
        userId: 'currentUser',
        username: 'You',
        content: 'Hi! How are you?',
        timestamp: new Date(Date.now() - 5000).toISOString(),
        isOwn: true
      }
    ]
  },
  {
    id: '2',
    name: 'Typeface AI',
    lastMessage: 'Let\'s discuss the project',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    messages: [
      {
        id: '3',
        userId: 'user2',
        username: 'Jane Smith',
        content: 'Let\'s discuss the project',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        isOwn: false
      }
    ]
  }
];

const initialState = {
  chats: sampleChats,
  activeChat: sampleChats[0]?.id || null,
  currentUser: {
    id: 'currentUser',
    username: 'You'
  }
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action) => {
      const newChat = {
        id: uuidv4(),
        name: action.payload.name || `Chat ${state.chats.length + 1}`,
        lastMessage: '',
        timestamp: new Date().toISOString(),
        messages: []
      };
      state.chats.unshift(newChat);
      state.activeChat = newChat.id;
    },
    
    deleteChat: (state, action) => {
      const chatId = action.payload;
      state.chats = state.chats.filter(chat => chat.id !== chatId);
      
      // If deleted chat was active, set active to first available chat
      if (state.activeChat === chatId) {
        state.activeChat = state.chats.length > 0 ? state.chats[0].id : null;
      }
    },
    
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
    
    sendMessage: (state, action) => {
      const { chatId, content } = action.payload;
      const chat = state.chats.find(c => c.id === chatId);
      
      if (chat) {
        const newMessage = {
          id: uuidv4(),
          userId: state.currentUser.id,
          username: state.currentUser.username,
          content,
          timestamp: new Date().toISOString(),
          isOwn: true
        };
        
        chat.messages.push(newMessage);
        chat.lastMessage = content;
        chat.timestamp = newMessage.timestamp;
        
        // Move chat to top of list
        const chatIndex = state.chats.findIndex(c => c.id === chatId);
        if (chatIndex > 0) {
          const [movedChat] = state.chats.splice(chatIndex, 1);
          state.chats.unshift(movedChat);
        }
        
        // Note: In a real app, you would dispatch an async action here
        // For demo purposes, we'll simulate responses in the component
      }
    },
    
    receiveMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const chat = state.chats.find(c => c.id === chatId);
      
      if (chat) {
        chat.messages.push(message);
        chat.lastMessage = message.content;
        chat.timestamp = message.timestamp;
        
        // Move chat to top of list
        const chatIndex = state.chats.findIndex(c => c.id === chatId);
        if (chatIndex > 0) {
          const [movedChat] = state.chats.splice(chatIndex, 1);
          state.chats.unshift(movedChat);
        }
      }
    }
  }
});

export const {
  createChat,
  deleteChat,
  setActiveChat,
  sendMessage,
  receiveMessage
} = chatSlice.actions;

export default chatSlice.reducer; 