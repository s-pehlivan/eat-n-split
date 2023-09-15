import React from "react";
import Profile from "./Profile";

const ProfileList = ({ friends }) => {
  return (
    <div className="profile-list">
      <ul>
        {friends.map((p) => (
          <Profile key={p.id} person={p} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
