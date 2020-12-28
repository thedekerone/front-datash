import React from "react";
import { BioInfo, InfoContainer, MainContainer, PersonalList, RightInfo, SchoolInfo, SectionContainer } from "./InfoCard.css";


export const InfoCard = () => {
  return (
    <InfoContainer>
      <MainContainer>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1StY7B1QWFhlzRr4sWAZojEmzHHoka_rgg&usqp=CAU"
          alt="person image"
        />
        <h2>Jason Wallace</h2>
        <p>Pitcher</p>
      </MainContainer>

      <SectionContainer >
        <h3><span>Personal Info</span></h3>
        <ul>
          <PersonalList ><i className="far fa-clock"></i> <p>Age</p> <RightInfo>20</RightInfo> </PersonalList>
          <PersonalList ><i className="far fa-clock"></i> <p>Height</p> <RightInfo>5ft 4in</RightInfo> </PersonalList>
          <PersonalList ><i className="far fa-clock"></i> <p>Weight</p> <RightInfo>83kg</RightInfo> </PersonalList>
          <PersonalList ><i className="far fa-clock"></i> <p>Age</p> <RightInfo>20</RightInfo> </PersonalList>
          <PersonalList ><i className="far fa-clock"></i> <p>Age</p> <RightInfo>20</RightInfo> </PersonalList>
        </ul>
      </SectionContainer>
      <SectionContainer >
        <h3><span>School</span></h3>
        <SchoolInfo > 
          <h4>School</h4>
          <p>St. Jhon River</p>
        </SchoolInfo>
        <SchoolInfo  >
          <h4>School Year</h4>
          <p>Junior</p>
        </SchoolInfo>
        <SchoolInfo  >
          <h4>Summer Team</h4>
          <p>Scorpions</p>
        </SchoolInfo>
        <SchoolInfo  >
          <h4>College commitment</h4>
          <p>University of florida</p>
        </SchoolInfo>
      </SectionContainer>
      <SectionContainer >
        <h3><span>Bio</span></h3>
        <BioInfo>
          US, baseball. Set numerous baseball records - was famousfor his big
          hitting. he won many titles with the New York Yankees
        </BioInfo>
      </SectionContainer>
    </InfoContainer>
  );
};
