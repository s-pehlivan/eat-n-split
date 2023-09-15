import React, { useState } from "react";
import ProfilePanel from "./components/ProfilePanel";
import CalculationPanel from "./components/CalculationPanel";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [selected, setSelected] = useState();

  const [bill, setBill] = useState("");
  const [yourShare, setYourShare] = useState("");
  const [friendShare, setFriendShare] = useState("");

  const [personPaying, setPersonPaying] = useState("you");

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="container">
      <div className="profile-panel">
        <ProfilePanel
          friends={friends}
          onAddFriend={handleAddFriend}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <CalculationPanel
        bill={bill}
        setBill={setBill}
        yourShare={yourShare}
        setYourShare={setYourShare}
        friendShare={friendShare}
        setFriendShare={setFriendShare}
        person={selected}
      />
    </div>
  );
};

export default App;
