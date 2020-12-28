import React from 'react'
import { ProgressBar } from '../../Layout/components/ProgressBar'
import { SummaryContainer, SummaryInfo } from './Summary.css'

export const Summary = () => {
    return (
        <SummaryContainer >
            <h3>Pitcher Summary</h3>
            <div>
                <SummaryInfo >
                    <p>Fastball Velocity</p>
                    <p>93.6</p>
                </SummaryInfo>
                <ProgressBar progress={0.4}></ProgressBar>
            </div>
            <div>
                <SummaryInfo >
                    <p>Fastball Velocity</p>
                    <p>93.6</p>
                </SummaryInfo>
                <ProgressBar progress={0.7}></ProgressBar>
            </div>
            <div>
                <SummaryInfo >
                    <p>Fastball Velocity</p>
                    <p>93.6</p>
                </SummaryInfo>
                <ProgressBar progress={0.2}></ProgressBar>
            </div>
        </SummaryContainer>
    )
}
