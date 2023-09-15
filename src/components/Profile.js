import React from "react";
import Button from "./Button";

const Profile = ({ person }) => {
  return (
    <li className="profile">
      <img src={person.img} alt="pro-pic" />
      <div className="info">
        <h3 className="name">{person.name}</h3>
        <div className="dept-info">
          {person.balance < 0 && (
            <p className="red">
              You owe {person.name} ${Math.abs(person.balance)}
            </p>
          )}
          {person.balance > 0 && (
            <p className="green">
              {person.name} owes you ${Math.abs(person.balance)}
            </p>
          )}
          {person.balance === 0 && <p>You and {person.name} are even</p>}
        </div>
      </div>
      <Button handleClick={() => {}}>Select</Button>
    </li>
  );
};

export default Profile;
