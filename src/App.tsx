import "./App.css";
import Counter from "./components/Counter";
import NewUser2 from "./components/NewUser2";
import React, { useState } from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="app">
      <Counter></Counter>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="app">
      <h1>User Management</h1>
      <User name="Rohomot Ullah" age={45} isRegistered={true}></User>
      <User name="Rohomot Ullah" age={45} isRegistered={false}></User>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="app">
      <h1>User Management</h1>

      <User
        name="Rohomot Ullah"
        age={45}
        isRegistered={false}
        lang={["Bangla", "English"]}
      ></User>
    </div>
  );
}

export default App;

const user1 = {
  name: "Rohomot Ullah",
  age: 45,
  isRegistered: false,
  lang: ["Bangla", "English"],
};

const user2 = {
  name: "Bortakia Bazer",
  age: 46,
  isRegistered: true,
  lang: ["Bangla", "English", "Hindi"],
};

function App() {
  return (
    <div className="app">
      <h1>User Management</h1>

      <User user={user1}></User>
      <User user={user2}></User>
    </div>
  );
}

export default App;


const users = [
  {
    id: 1,
    name: "baitolla",
    email: "fazolollah@getMaxListeners.com",
    age: 987,
  },

  {
    id: 2,
    name: "Boshirullah",
    email: "dolaia@gmail.com",
    age: 456,
  },
];

function App() {
  return (
    <div className="app">
      <h1>User Management</h1>

      <UserDemo users={users}></UserDemo>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="app">
      <h1>User Management</h1>

      <DataFetch status="success"></DataFetch>
    </div>
  );
}

export default App;



function App() {
  return (
    <div className="app">
      <h1>Children Props</h1>

      <Button>Click me</Button>
      <Post></Post>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="app">
      <h1>Style Props</h1>
      <ButtonStyle btnStyle={{ color: "red" }}></ButtonStyle>
    </div>
  );
}

export default App;


type user = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<null | user>({} as user);

  const handleAddUser = () => {
    setUsers({ id: 1, name: "nadia" });
  };

  return (
    <div className="app">
      <button onClick={handleAddUser}>Add User</button>
      <p>{users?.name}</p>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="app">
      <NewUser></NewUser>
    </div>
  );
}

export default App;

*/
