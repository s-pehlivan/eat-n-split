import React from "react";

const Option = ({ value, setValue, person, emoji, text }) => {
  const uniqueId = Date.now();
  return (
    <form className="input-group">
      <label htmlFor={uniqueId}>
        {emoji} {text}
      </label>
      <select
        id={uniqueId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="You">You</option>
        <option value={person}>{person || "friend"}</option>
      </select>
    </form>
  );
};

export default Option;
