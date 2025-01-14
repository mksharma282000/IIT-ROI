import React from "react";

const Heading = ({ children}) => {
  return (
    <h1
      className={`text-3xl font-barlow font-bold mb-3`}
    >
      {children}
    </h1>
  );
};
export {Heading};