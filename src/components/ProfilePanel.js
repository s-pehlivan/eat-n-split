import React from "react";
import ProfileList from "./ProfileList";
import AddFriend from "./AddFriend";
import Button from "./Button";
import { useState } from "react";

const ProfilePanel = ({
  friends,
  selectedFriend,
  isAddOpen,
  setIsAddOpen,
  onAddFriend,
  onSelection,
}) => {
  return (
    <div className="profile-panel">
      {friends.length === 0 ? (
        <h2> There is no contact to show Please Add contact.</h2>
      ) : (
        <ProfileList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      )}
      {isAddOpen && (
        <AddFriend setIsOpen={setIsAddOpen} onAddFriend={onAddFriend} />
      )}
      <Button handleClick={() => setIsAddOpen((s) => !s)}>Add Friend</Button>
    </div>
  );
};

export default ProfilePanel;
