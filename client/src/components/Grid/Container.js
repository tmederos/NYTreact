import React from "react";

export const Container = ({ fluid, children }) =>
  <div style={{ }} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
