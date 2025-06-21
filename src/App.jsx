import React from 'react'
import ChatSidebar from './components/ChatSidebar'
import ChatWindow from './components/ChatWindow'
import './App.css'

function App() {
  return (
    <div className="app">
      <ChatSidebar />
      <ChatWindow />
    </div>
  )
}

export default App
