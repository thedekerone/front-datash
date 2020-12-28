import React from 'react'
import { CardContainer } from './EventCard.css'

export const EventCard = ({day=22, month="oct"}) => {
    return (
        <CardContainer>
           <h4>{day}
            <span>
                {month}
            </span>
           </h4> 

           <p>Event Type: Practice Bullpen</p>

           
        </CardContainer>
    )
}
