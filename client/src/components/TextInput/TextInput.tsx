import "./TextInput.css";
import { Icon } from "@iconify/react";
import { useState } from "react"; // Add useState import

function TextInput({ onSubmit }) {
  // Add onSubmit prop
  const [text, setText] = useState(""); // Add state for input text

  const handleSubmit = () => {
    if (text.trim()) {
      // Check if text is non-empty after trimming whitespace
      onSubmit(text); // Call the provided function with current text
      setText(""); // Clear the input after submission
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="text-input"
        placeholder="Hazme una pregunta..."
        value={text} // Control the input with state
        onChange={(e) => setText(e.target.value)} // Update state on change
        onKeyPress={handleKeyPress} // Handle Enter key
      />
      <button
        className="send-button"
        onClick={handleSubmit} // Handle button click
      >
        <Icon icon="mdi:send" style={{ color: "#ffcb94" }} />
      </button>
    </div>
  );
}

export default TextInput;
