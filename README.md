 # Microfrontend POC (Vite + React + Module Federation)

This project demonstrates a **Microfrontend Architecture** using **Vite, React, and Module Federation**. It consists of three applications:

- **Main** (Host application)
- **Chat** (Remote microfrontend)
- **Email** (Remote microfrontend)

## 🚀 Features
- **Module Federation** for dynamic imports
- **React + Vite** for fast builds and development
- **Independent microfrontends** running on different ports
- **Lazy loading** of remote components

🏗️ **Micro-Frontend Folder Structure **

📂 micro-frontend-poc
├── 📂 main-app       # Host application
│   ├── src
│   │   ├── components # Shared components (Header, Button)
│   │   ├── store.js   # Shared Zustand store
│   │   ├── App.jsx    # Renders Header and loads micro-frontends
│   ├── vite.config.js # Exposes store and components
│
├── 📂 chat-app       # Micro-frontend for Chat
│   ├── src
│   │   ├── App.jsx    # Uses shared Button and Zustand store
│   ├── vite.config.js # Loads hostApp components
│
├── 📂 email-app      # Micro-frontend for Email
│   ├── src
│   │   ├── App.jsx    # Uses shared Button and Zustand store
│   ├── vite.config.js # Loads hostApp components


## 🛠️ Installation & Setup
   Clone the repository:
   git clone project
   cd microfrontend-poc

  Start each microfrontend in separate terminals:
  cd main && npm install && npm run build
  cd chat && npm install && npm run build
  cd email && npm install && npm run build

  Running ports
  Main	 5173	http://localhost:5173/
  Chat	 5001	http://localhost:5001/
  Email  5002	http://localhost:5002/

  Access the Host Application and Open the browser and go to: http://localhost:5173

 ** Verify Remote Entry Files**

  Check if each remote entry is accessible:
  Host App Remote Entry: http://localhost:5173/assets/remoteEntry.js
  Chat App Remote Entry: http://localhost:5001/assets/remoteEntry.js
  Email App Remote Entry: http://localhost:5002/assets/remoteEntry.js

  
**🎯 How It Works**
The Main app dynamically loads Chat and Email components using Module Federation.
Chat and Email microfrontends expose components (ChatComponent and EmailComponent).
When you visit http://localhost:5173/, it will render both microfrontends inside the Main app.

I have created header component in main app which has navigation Chat and Email
chat routing will show the chat microfrontend and email routing will show the email microfrontend dynamically.

**🏗️ Key Architectural Decisions**

1️⃣ Why Vite & Module Federation?
Vite provides fast builds and better performance than Webpack.
Module Federation allows dynamic loading of micro-frontends at runtime.
Independent Deployment of micro-frontends is possible.

2️⃣ Why Zustand for Global State?
Lightweight compared to Redux.
No boilerplate (simple API for shared state).
Reactivity (changes propagate to all micro-frontends in real-time).

3️⃣ How Micro-Frontends Communicate?
Shared Zustand store for global state.
Module Federation for loading shared components dynamically.











  
