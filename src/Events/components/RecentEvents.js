import React from 'react'
import { EventCard } from './EventCard'
import { EventGrid, EventsContainer } from './RecentEvents.css'

export const RecentEvents = () => {
    return (
        <EventsContainer>
            <h3>Recent Events</h3>
            <EventGrid>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
            </EventGrid>
        </EventsContainer>
    )
}
