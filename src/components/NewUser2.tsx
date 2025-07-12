import React, { useState } from "react";

const NewUser2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
    };
    console.log(newUser);
  };

  return (
    <div>
      <h2>Create User </h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">
            Name :{" "}
            <input
              type="text"
              id="name"
              value={name}
              required
              onChange={handleNameChange}
            />{" "}
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email :{" "}
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={handleEmailChange}
            />{" "}
          </label>
        </div>
        <button type="submit">create user </button>
      </form>
    </div>
  );
};

export default NewUser2;

/*
function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <NewUser2></NewUser2>
    </div>
  );
}

export default App;
*/
