import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return <div>{props.children}</div>;
};

export default Button;

/*

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
*/
