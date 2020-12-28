import styled from "styled-components"


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  -webkit-box-shadow: 0px 9px 23px -7px #e0e0e0;
  box-shadow: 0px 9px 23px -7px #e8e8e8;
  
  & > h1{
    color: #414f54;
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > li{
    margin-left: 2rem;
    font-weight: 400;
  }
  & > li > a{
    margin-left: 1.2rem;
    font-weight: 400;
    color: #8093a0;
    font-size: 18px;
    font-family: "Lato", sans-serif;
  }
`

