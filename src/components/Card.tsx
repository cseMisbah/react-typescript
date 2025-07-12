import React, { ReactNode } from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="Card">{children}</div>;
};

export default Card;
