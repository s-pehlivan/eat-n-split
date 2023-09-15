import React from "react";

const Option = ({ emoji, text, value, setValue, selectedFriend }) => {
  const uniqueId = crypto.randomUUID();
  return (
    <div className="input-group">
      <label htmlFor={uniqueId}>
        {emoji} {text}
      </label>
      <select
        id={uniqueId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend}</option>
      </select>
    </div>
  );
};

export default Option;
