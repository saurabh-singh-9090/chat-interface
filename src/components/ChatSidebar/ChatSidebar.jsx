import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  FiPlus, 
  FiMessageCircle, 
  FiTrash2, 
  FiSearch,
} from 'react-icons/fi';
import { createChat, deleteChat, setActiveChat } from '../../store/chatSlice';
import './ChatSidebar.css';

const ChatSidebar = () => {
  const dispatch = useDispatch();
  const { chats, activeChat } = useSelector(state => state.chat);
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [newChatName, setNewChatName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateChat = () => {
    if (newChatName.trim()) {
      dispatch(createChat({ name: newChatName.trim() }));
      setNewChatName('');
      setShowNewChatModal(false);
    }
  };

  const handleDeleteChat = (chatId, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this chat?')) {
      dispatch(deleteChat(chatId));
    }
  };

  const handleChatSelect = (chatId) => {
    dispatch(setActiveChat(chatId));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.abs(now - date) / 36e5;

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 168) { // 7 days
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
        <button 
          className="new-chat-btn"
          onClick={() => setShowNewChatModal(true)}
          title="New Chat"
        >
          <FiPlus />
        </button>
      </div>

      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="chat-list">
        {filteredChats.map(chat => (
          <div
            key={chat.id}
            className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
            onClick={() => handleChatSelect(chat.id)}
          >
            <div className="chat-avatar">
              <FiMessageCircle />
            </div>
            <div className="chat-info">
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px'}}>
                <h3 className="chat-name">{chat.name}</h3>
                <span className="chat-time">{formatTime(chat.timestamp)}</span>
              </div>
              <p className="chat-preview">
                {chat.lastMessage || 'No messages yet'}
              </p>
            </div>
            <div className="chat-actions">
              <button
                className="delete-btn"
                onClick={(e) => handleDeleteChat(chat.id, e)}
                title="Delete Chat"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showNewChatModal && (
        <div className="modal-overlay" onClick={() => setShowNewChatModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Create New Chat</h3>
            <input
              type="text"
              placeholder="Enter chat name..."
              value={newChatName}
              onChange={(e) => setNewChatName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreateChat()}
              autoFocus
            />
            <div className="modal-actions">
              <button onClick={() => setShowNewChatModal(false)}>Cancel</button>
              <button onClick={handleCreateChat} disabled={!newChatName.trim()}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSidebar; 