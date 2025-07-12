import React from "react";

type userProps = {
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
};

//type userProps = { lang: string };

const User = ({ user }: userProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age} years old</p>
      {user.isRegistered ? <p>registered user</p> : <p>not registered user</p>}
      <p>
        Speaks :{" "}
        {user.lang.map((language, index) => {
          return <span key={index}>{language}</span>;
        })}
      </p>
    </div>
  );
};

export default User;

/*
type userProps = { name: string; age: number };

const User = (props: userProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age} years old</p>
    </div>
  );
};

export default User;



const User = (props: { name: string; age : number }) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age} years old</p>
      <p>67 years old</p>
    </div>
  );
};

export default User;
*/
