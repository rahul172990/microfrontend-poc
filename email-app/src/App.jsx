import React from "react";
import Button from "../../main-app/src/components/Button";

function EmailApp() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>Email Application</h2>
      <p>This is the email micro-frontend.</p>
      <React.Suspense fallback={<div>Loading Button...</div>}>
        <Button onClick={() => alert("Button clicked!")}>Click</Button>
      </React.Suspense>
    </div>
  );
}

export default EmailApp;
