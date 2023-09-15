import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const AddFriend = ({ setIsOpen, onAddFriend }) => {
  const [friend, setFriend] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");
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
            if (friend === "" || img === "") return;
            const id = crypto.randomUUID();
            const newFriend = {
              id: id,
              name: friend,
              img: `${img}?=${id}`,
              balance: 0,
            };
            onAddFriend(newFriend);
            setFriend("");
            setImg("https://i.pravatar.cc/48");
            setIsOpen((s) => !s);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddFriend;
