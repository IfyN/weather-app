import React from "react";
import { StyledBurger } from "./Sidebar.styles";

export function Burger({ onClick }) {
  return (
    <StyledBurger onClick={onClick}>
      <div />
      <div />
    </StyledBurger>
  );
}
