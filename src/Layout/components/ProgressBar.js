import React from 'react'
import { BarContainer, InsideBar } from './ProgressBar.css'

export const ProgressBar = ({progress=0}) => {
    return (
        <BarContainer >
            <InsideBar progress={progress*100 + "%"}></InsideBar>
        </BarContainer>
    )
}
