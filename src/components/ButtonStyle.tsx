import React from "react";

type ButtonStyleProps = {
  btnStyle: React.CSSProperties;
};

const ButtonStyle = (props: ButtonStyleProps) => {
  return <div style={props.btnStyle}>ButtonStyle</div>;
};

export default ButtonStyle;

/*
function App() {
  return (
    <div className="app">
      <h1>Style Props</h1>
      <ButtonStyle btnStyle={{ color: "red" }}></ButtonStyle>
    </div>
  );
}

export default App;
*/
