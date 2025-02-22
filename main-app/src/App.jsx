// import React, { Suspense } from "react";

// const ChatApp = React.lazy(() => import("chatApp/ChatApp"));
// const EmailApp = React.lazy(() => import("emailApp/EmailApp"));

// function App() {
//   return (
//     <div>
//       <h1>Main Application</h1>
//       <Suspense fallback={<div>Loading Chat...</div>}>
//         <ChatApp />
//       </Suspense>
//       <Suspense fallback={<div>Loading Email...</div>}>
//         <EmailApp />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const ChatApp = lazy(() => import("chatApp/ChatApp"));
const EmailApp = lazy(() => import("emailApp/EmailApp"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/email" element={<EmailApp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
