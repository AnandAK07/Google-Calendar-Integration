import React from 'react';

const EventsTable = ({ events }) => {
  return (
    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.name}</td>
            <td>{event.date}</td>
            <td>{event.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventsTable;
