import React, { useState } from 'react';

const EventPopupForm = ({ onCreateEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateEvent({ name: eventName, date: eventDate, time: eventTime });
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <div>
        <label>Event Name:</label>
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
      </div>
      <div>
        <label>Event Date:</label>
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
      </div>
      <div>
        <label>Event Time:</label>
        <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} required />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventPopupForm;
