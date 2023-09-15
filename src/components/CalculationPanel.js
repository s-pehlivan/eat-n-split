import React from "react";
import Input from "./Input";
import Option from "./Option";

const CalculationPanel = ({
  bill,
  setBill,
  yourShare,
  setYourShare,
  person,
}) => {
  return (
    <div className="calculation-panel">
      <h1>Split the bill with {person}</h1>
      <Input emoji="💰" text="Bill Value" value={bill} setValue={setBill} />
      <Input
        emoji="🧍‍♀️"
        text="Your expense"
        value={yourShare}
        setValue={setYourShare}
      />
      <Input emoji="🧍‍♀️" text="X's expense" value="" disabled={true} />
      <Option
        emoji="🤑"
        text="Who is paying the bill?"
        value="you"
        setValue={() => {}}
      />
    </div>
  );
};

export default CalculationPanel;
