import React, { useState } from "react";

const NewUser = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
  };

  return (
    <div>
      <h2>create new user</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <button onClick={handleClick}>show me</button>
    </div>
  );
};

export default NewUser;
