import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return <div>{props.children}</div>;
};

export default Button;
