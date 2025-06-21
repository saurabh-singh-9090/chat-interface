# Chat Interface

A modern, responsive chat interface built with React and Redux Toolkit. This application simulates a real-time messaging experience with multiple chat rooms, message management, and an intuitive user interface.

## 🚀 Live Demo

**[View Live Application](https://saurabhsingh-9090.github.io/chat-interface)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### Chat Management
- **Create New Chats**: Start new conversations with custom names
- **Delete Chats**: Remove unwanted chat rooms with confirmation
- **Active Chat Selection**: Switch between different chat rooms
- **Chat Search**: Find specific chats by name or last message content

### Messaging
- **Send Messages**: Real-time message sending with enter key support
- **Simulated Responses**: Automatic AI-like responses for demo purposes
- **Message Bubbles**: Distinct styling for sent and received messages
- **Message Timestamps**: Smart time formatting (time, day, or date)
- **Auto-scroll**: Automatic scrolling to latest messages

### User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Dark Theme**: Professional dark color scheme
- **Icon Integration**: Beautiful icons from React Icons (Feather Icons)
- **Empty States**: Helpful messages when no chats are selected

### State Management
- **Redux Toolkit**: Centralized state management for chats and messages
- **Persistent Chat History**: Messages persist across chat switches
- **Real-time Updates**: Immediate UI updates for all actions

## 🛠 Tech Stack

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **JavaScript (ES6+)** - Modern JavaScript syntax and features

### State Management
- **Redux Toolkit 2.8.2** - Simplified Redux for state management
- **React-Redux 9.2.0** - React bindings for Redux

### UI & Styling
- **CSS3** - Custom styling with modern CSS features
- **React Icons 5.5.0** - Beautiful icon library (Feather Icons)
- **Responsive Design** - Mobile-first approach

### Build Tools
- **Vite 6.3.5** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

### Utilities
- **UUID 11.1.0** - Unique ID generation for messages and chats

### Deployment
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated CI/CD pipeline

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saurabhsingh-9090/chat-interface.git
   cd chat-interface
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 📁 Project Structure

```
chat-interface/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── components/              # React components
│   │   ├── ChatSidebar.jsx      # Left sidebar with chat list
│   │   ├── ChatSidebar.css      # Sidebar styling
│   │   ├── ChatWindow.jsx       # Main chat interface
│   │   ├── ChatWindow.css       # Chat window styling
│   │   ├── MessageBubble.jsx    # Individual message component
│   │   └── MessageBubble.css    # Message bubble styling
│   ├── hooks/
│   │   └── useSimulatedResponse.js  # Custom hook for AI responses
│   ├── store/                   # Redux store configuration
│   │   ├── store.js            # Store setup
│   │   └── chatSlice.js        # Chat state management
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styling
│   ├── main.jsx                # React entry point
│   └── index.css               # Global CSS reset and variables
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🎯 Key Components

### ChatSidebar
- Displays list of all chats
- Search functionality
- New chat creation modal
- Chat deletion with confirmation
- Smart timestamp formatting

### ChatWindow
- Main messaging interface
- Message input with multi-line support
- Auto-scroll to latest messages
- Empty state for better UX
- Message count display

### MessageBubble
- Individual message rendering
- Distinct styling for sent/received messages
- Timestamp display
- User identification

### Redux Store
- Centralized state management
- Chat CRUD operations
- Message handling
- User session management

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Automatic deployment**
   - GitHub Actions automatically builds and deploys
   - Live site updates within 2-5 minutes
   - Check "Actions" tab in GitHub for deployment status

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

This will:
- Build the project (`npm run build`)
- Deploy to `gh-pages` branch
- Update the live site

## 🔧 Configuration

### GitHub Pages Setup

The project is pre-configured for GitHub Pages:
- **Base URL**: `/chat-interface/` (in `vite.config.js`)
- **Homepage**: Set in `package.json`
- **Build Output**: `dist/` directory

### Environment Variables

No environment variables are required for basic functionality. The app uses:
- Simulated responses for demo purposes
- Local state management with Redux
- No external API dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Redux Toolkit Team** - For simplified state management
- **Feather Icons** - For beautiful, consistent icons
- **Vite Team** - For the lightning-fast build tool

---

**Built with ❤️ by [Saurabh Singh](https://github.com/saurabhsingh-9090)**
