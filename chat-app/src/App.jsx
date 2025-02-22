import React from "react";
// import useGlobalStore from "mainApp/store";
const Button = React.lazy(() => import("mainApp/Button"));
// const useGlobalStore = React.lazy(() => import("mainApp/store"));
import { useGlobalStore } from "mainApp/store";

function ChatApp() {
  const { count, increment, decrement } = useGlobalStore();

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2
        style={{
          color: "black",
        }}
      >
        Chat Application
      </h2>
      <p>This is the chat micro-frontend.</p>
      <p
        style={{
          color: "black",
        }}
      >
        Shared Count: {count}
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <React.Suspense fallback={<div>Loading Button...</div>}>
        <Button onClick={increment}>Click Me</Button>
      </React.Suspense>
    </div>
  );
}

export default ChatApp;
