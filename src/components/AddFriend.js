import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const AddFriend = ({ onAddFriend }) => {
  const [friend, setFriend] = useState("");
  const [img, setImg] = useState("");
  return (
    <div className="add-friend">
      <div className="friend-form">
        <Input
          value={friend}
          setValue={setFriend}
          emoji="👫"
          text="Friend Name"
        />
        <Input value={img} setValue={setImg} emoji="🌄" text="Image URL" />
        <Button
          handleClick={() => {
            friend !== "" && img !== ""
              ? onAddFriend({
                  id: `${friend + img + Math.random()}`,
                  name: friend,
                  img: img,
                  balance: -5,
                })
              : alert("Please enter a name");
            friend !== "" && setFriend("");
            img !== "" && setImg("");
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddFriend;
