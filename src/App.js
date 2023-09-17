import React, { useState } from "react";
import ProfilePanel from "./components/ProfilePanel";
import CalculationPanel from "./components/CalculationPanel";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelection(friend) {
    setSelected((curr) => (curr?.id === friend.id ? null : friend));
    setIsAddOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
  }

  return (
    <div className="container">
      <div className="profile-panel">
        <ProfilePanel
          friends={friends}
          selectedFriend={selected}
          isAddOpen={isAddOpen}
          setIsAddOpen={setIsAddOpen}
          onAddFriend={handleAddFriend}
          onSelection={handleSelection}
        />
      </div>
      <div
        className={`calculation-panel ${selected === null && "hidden-panel"}`}
      >
        {selected !== null && (
          <CalculationPanel
            selectedFriend={selected.name}
            handleSplitBill={handleSplitBill}
            key={selected.id}
          />
        )}
      </div>
    </div>
  );
};

export default App;
