import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSend, FiSmile, FiPaperclip, FiMoreVertical } from 'react-icons/fi';
import { sendMessage } from '../store/chatSlice';
import { useSimulatedResponse } from '../hooks/useSimulatedResponse';
import MessageBubble from './MessageBubble';
import './ChatWindow.css';

const ChatWindow = () => {
  const dispatch = useDispatch();
  const { chats, activeChat } = useSelector(state => state.chat);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const currentChat = chats.find(chat => chat.id === activeChat);
  const lastMessage = currentChat?.messages[currentChat?.messages.length - 1];

  // Simulate API responses for demo
  useSimulatedResponse(activeChat, lastMessage);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const handleSendMessage = () => {
    if (message.trim() && activeChat) {
      dispatch(sendMessage({
        chatId: activeChat,
        content: message.trim()
      }));
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!currentChat) {
    return (
      <div className="chat-window">
        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <h3>Welcome to Chat Interface</h3>
          <p>Select a chat to start messaging or create a new one</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-info">
          <h2>{currentChat.name}</h2>
          <span className="chat-status">
            {currentChat.messages.length} messages
          </span>
        </div>
        <div className="chat-actions">
          <button className="action-btn" title="More options">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      <div className="messages-container">
        <div className="messages-list">
          {currentChat.messages.map((msg, index) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isFirst={index === 0 || currentChat.messages[index - 1].userId !== msg.userId}
              isLast={index === currentChat.messages.length - 1 || 
                      currentChat.messages[index + 1].userId !== msg.userId}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="message-input-container">
        <div className="input-wrapper">
          <button className="attachment-btn" title="Attach file">
            <FiPaperclip />
          </button>
          
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="message-input"
            rows="1"
          />
          
          <button className="emoji-btn" title="Add emoji">
            <FiSmile />
          </button>
          
          <button
            className={`send-btn ${message.trim() ? 'active' : ''}`}
            onClick={handleSendMessage}
            disabled={!message.trim()}
            title="Send message"
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow; 