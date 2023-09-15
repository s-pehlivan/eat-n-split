import React from "react";
import ProfileList from "./ProfileList";
import AddFriend from "./AddFriend";
import Button from "./Button";
import { useState } from "react";

const ProfilePanel = ({ friends, onAddFriend, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-panel">
      <ProfileList friends={friends} />
      {isOpen && <AddFriend onAddFriend={onAddFriend} />}
      <Button handleClick={() => setIsOpen((s) => !s)}>Add Friend</Button>
    </div>
  );
};

export default ProfilePanel;
