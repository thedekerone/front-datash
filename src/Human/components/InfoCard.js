import React from "react";
import {
  infoContainer,
  sectionContainer,
  mainContainer,
} from "./InfoCard.module.css";

export const InfoCard = () => {
  return (
    <article onClick={() => console.log("dasasd")} className={infoContainer}>
      <section className={mainContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1StY7B1QWFhlzRr4sWAZojEmzHHoka_rgg&usqp=CAU"
          alt="person image"
        />
        <h2>Jason Wallace</h2>
        <p>Pitcher</p>
      </section>

      <section className={sectionContainer}>
        <h3>Personal Info</h3>
        <ul>
          <li>Random data</li>
          <li>Random data</li>
          <li>Random data</li>
          <li>Random data</li>
          <li>Random data</li>
        </ul>
      </section>
      <section className={sectionContainer}>
        <h3>School</h3>
        <div>
          <h4>School</h4>
          <p>St. Jhon River</p>
        </div>
        <div>
          <h4>School Year</h4>
          <p>Junior</p>
        </div>
        <div>
          <h4>Summer Team</h4>
          <p>Scorpions</p>
        </div>
        <div>
          <h4>College commitment</h4>
          <p>University of florida</p>
        </div>
      </section>
      <section className={sectionContainer}>
        <h3>Bio</h3>
        <p>
          US, baseball. Set numerous baseball records - was famousfor his big
          hitting. he won many titles with the New York Yankees
        </p>
      </section>
    </article>
  );
};
