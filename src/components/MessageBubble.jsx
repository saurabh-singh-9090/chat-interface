import React from 'react';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import './MessageBubble.css';

const MessageBubble = ({ message, isFirst, isLast }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const getAvatarColor = (userId) => {
    const colors = [
      '#d03c38', '#e74c3c', '#c0392b', '#a93226', 
      '#922b21', '#7b241c', '#641e16', '#d63031',
      '#e17055', '#fd79a8', '#fdcb6e', '#e84393'
    ];
    const index = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div className={`message-bubble ${message.isOwn ? 'own' : 'other'}`}>
      {!message.isOwn && isFirst && (
        <div className="message-avatar" style={{ backgroundColor: getAvatarColor(message.userId) }}>
          {message.username.charAt(0).toUpperCase()}
        </div>
      )}
      
      <div className="message-content">
        {!message.isOwn && isFirst && (
          <div className="message-sender">
            {message.username}
          </div>
        )}
        
        <div className="message-text">
          {message.content}
        </div>
        
        <div className="message-meta">
          <span className="message-time">
            {formatTime(message.timestamp)}
          </span>
          {message.isOwn && (
            <div className="message-status">
              <FiCheck className="status-icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble; 