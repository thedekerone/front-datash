import styled from 'styled-components'

export const CardContainer = styled.article`
    padding:.75rem 1.5rem 1.5rem;
    margin-top:1rem;
    font-family: Oxygen;
    display:inline-block;
    margin-right: 1rem;
    border-radius:5px;
    border: 1px solid #ccc;
    width:210px;
    white-space: normal; 


    & > h4 {
        font-size: 3rem;
        font-weight:300;
        color:#555;
        display:flex;
    }

    & > h4 > span {
        font-size: 1.75rem;
        margin-left:5px;
        margin-top:4px;
        color:inherit;
    }
`