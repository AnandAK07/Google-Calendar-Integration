import React, { useState } from 'react';
import GoogleSignInButton from './components/GoogleSignInButton';
import EventPopupForm from './components/EventPopupForm';
import EventsTable from './components/EventsTable';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [events, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${process.env.URL}/auth/google`);
      const { token } = await response.json();
      setAccessToken(token);
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  const handleCreateEvent = async (eventData) => {
    try {
      const response = await fetch(`${process.env.URL}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify(eventData),
      });
      const newEvent = await response.json();
      setEvents([...events, newEvent]);
      setShowPopup(false);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h1>Google Calendar Integration</h1>
      {!accessToken ? (
        <GoogleSignInButton onSignIn={handleSignIn} />
      ) : (
        <div>
          <button onClick={() => setShowPopup(true)}>Create Calendar Event</button>
          {showPopup && <EventPopupForm onCreateEvent={handleCreateEvent} />}
          <EventsTable events={events} />
        </div>
      )}
    </div>
  );
};

export default App;
