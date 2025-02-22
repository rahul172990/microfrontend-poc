import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
