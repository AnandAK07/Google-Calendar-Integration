import React, { useState } from 'react';

const EventForm = ({ createEvent }) => {
    const [eventData, setEventData] = useState({ name: "", date: "", time: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        createEvent(eventData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Event Name"
                value={eventData.name}
                onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                required
            />
            <input
                type="date"
                value={eventData.date}
                onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                required
            />
            <input
                type="time"
                value={eventData.time}
                onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
                required
            />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default EventForm;
