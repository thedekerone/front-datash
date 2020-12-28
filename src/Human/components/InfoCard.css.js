 import styled from "styled-components"

 export const InfoContainer = styled.div`
 background-color: white;
 padding: 2.5rem 1.5rem;
 margin: 2rem;
 border-radius: 5px;
 width: 280px;
 -webkit-box-shadow: 0px 9px 23px -7px #e0e0e0;
 box-shadow: 0px 9px 23px -7px #e8e8e8;

& h2{
  font-size: 1.25rem;
  margin-bottom: 4px;
  font-weight: 400;
}
 `

 export const MainContainer = styled.div`
 margin-bottom: 2.25rem;
 text-align: center;

 & img{
   border-radius: 100%;
   width: 100px;
   margin-bottom: .75rem;
 }

 `

export const SectionContainer = styled.div`

&:not(:last-of-type){
  margin-bottom: 2rem;
}

& > h3{
  margin-bottom: .50rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

& > h3 > span{
  flex-shrink: 0;
}

& > h3::after{
  content:"";
  width: 100%;
  margin-left: 1rem;
  margin-top: 4px;
  height: 1px;
  background-color: rgba(219, 216, 216, 0.603);
}
`

export const SchoolInfo = styled.div`
margin-bottom: 1rem;

& h4{
  font-size: .85rem;
  color: #b1b0b0;
  margin-bottom: .25rem;
}
`

export const PersonalList = styled.li`
margin: .75rem auto;
display: flex;

` 
export const RightInfo = styled.div`
width: 4rem;
margin-left: auto;

` 

export const BioInfo = styled.p`
font-size: .95rem;
line-height: 1.75rem;

`
