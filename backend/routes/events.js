const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, date, time } = req.body;
  const accessToken = req.headers.authorization.split(' ')[1];

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  try {
    const event = {
      summary: name,
      start: { dateTime: `${date}T${time}:00`, timeZone: 'UTC' },
      end: { dateTime: `${date}T${time}:00`, timeZone: 'UTC' },
    };
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error creating event');
  }
});

module.exports = router;
