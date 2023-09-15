import React from "react";
import Input from "./Input";
import Option from "./Option";
import { useState } from "react";

const CalculationPanel = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function settingBill(value) {
    setBill(Number(value));
  }
  function settingUserPay(value) {
    const pay = Number(value) > Number(bill) ? Number(bill) : Number(value);
    setPaidByUser(pay);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <div className="calculation-panel">
      <h1>Split the bill with {selectedFriend}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          emoji="💰"
          text="Bill Value"
          value={bill}
          setValue={settingBill}
        />
        <Input
          emoji="🧍‍♀️"
          text="Your expense"
          value={paidByUser}
          setValue={settingUserPay}
        />
        <Input
          emoji="🧍‍♀️"
          text={`${selectedFriend}'s expense`}
          value={paidByFriend}
          disabled={true}
        />
        <Option
          emoji="🤑"
          text="Who is paying the bill?"
          value={whoIsPaying}
          setValue={setWhoIsPaying}
          selectedFriend={selectedFriend}
        />
        <button type="submit">Split Bill</button>
      </form>
    </div>
  );
};

export default CalculationPanel;
