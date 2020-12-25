import React from "react";
import {
  infoContainer,
  sectionContainer,
  mainContainer,
  rightInfo,
  personalList,
  schoolInfo,
  bioInfo
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
        <h3><span>Personal Info</span></h3>
        <ul>
          <li className={personalList}><i className="far fa-clock"></i> <p>Age</p> <p className={rightInfo}>20</p> </li>
          <li className={personalList}><i className="far fa-clock"></i> <p>Height</p> <p className={rightInfo}>5ft 4in</p> </li>
          <li className={personalList}><i className="far fa-clock"></i> <p>Weight</p> <p className={rightInfo}>83kg</p> </li>
          <li className={personalList}><i className="far fa-clock"></i> <p>Age</p> <p className={rightInfo}>20</p> </li>
          <li className={personalList}><i className="far fa-clock"></i> <p>Age</p> <p className={rightInfo}>20</p> </li>
        </ul>
      </section>
      <section className={sectionContainer}>
        <h3><span>School</span></h3>
        <div className={schoolInfo}> 
          <h4>School</h4>
          <p>St. Jhon River</p>
        </div>
        <div  className={schoolInfo}>
          <h4>School Year</h4>
          <p>Junior</p>
        </div>
        <div  className={schoolInfo}>
          <h4>Summer Team</h4>
          <p>Scorpions</p>
        </div>
        <div  className={schoolInfo}>
          <h4>College commitment</h4>
          <p>University of florida</p>
        </div>
      </section>
      <section className={sectionContainer}>
        <h3><span>Bio</span></h3>
        <p className={bioInfo}>
          US, baseball. Set numerous baseball records - was famousfor his big
          hitting. he won many titles with the New York Yankees
        </p>
      </section>
    </article>
  );
};
