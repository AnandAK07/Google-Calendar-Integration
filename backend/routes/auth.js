const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
  `${process.env.CLIENT_ID}`,
  `${process.env.CLIENT_SECRET}`,
  `${process.env.REDIRECT_URI}`
);

router.get('/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/calendar'],
  });
  res.redirect(url);
});

router.get('/google/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    res.json({ token: tokens.access_token });
  } catch (error) {
    res.status(500).send('Error during authentication');
  }
});

module.exports = router;
