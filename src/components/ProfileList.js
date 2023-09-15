import React from "react";
import Profile from "./Profile";

const ProfileList = ({ friends, selectedFriend, onSelection }) => {
  return (
    <div className="profile-list">
      <ul>
        {friends.map((p) => (
          <Profile
            key={p.id}
            person={p}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
