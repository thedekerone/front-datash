import React from "react";
import { Header, NavList } from "./Navbar.css";

export const Navbar = () => {
  return (
    <Header >
      <h1>Datash</h1>
      <nav>
        <NavList >
          <li>
            <a href="#">Leaderboard</a>
          </li>
          <li>
            <a href="#">Network</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};
