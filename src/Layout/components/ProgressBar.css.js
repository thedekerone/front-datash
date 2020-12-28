import styled from 'styled-components'

export const BarContainer = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 50px;
    background-color: rgb(220, 220, 220);
    position: relative;

`
export const InsideBar = styled.div`
    height: 5px;
    border-radius: 50px;
    background-color: #35c32a;
    z-index: 100;
    width: ${(props)=>props.progress} ;
    position: absolute;
    left: 0;
    top: 0;

`
