import React from "react";

type userDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: userDemoProps) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;

/*


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

*/
