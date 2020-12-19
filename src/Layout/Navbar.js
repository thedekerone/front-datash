import React from "react";
import { header, nav_list } from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={header}>
      <h1>Datash</h1>
      <nav>
        <ul className={nav_list}>
          <li>
            <a href="#">Leaderboard</a>
          </li>
          <li>
            <a href="#">Network</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
