import React from "react";

const Input = ({ value, setValue, emoji, text, disabled = false }) => {
  const uniqueId = Date.now();
  return (
    <form className="input-group">
      <label htmlFor={uniqueId}>
        {emoji} {text}
      </label>
      <input
        id={uniqueId}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
    </form>
  );
};

export default Input;
