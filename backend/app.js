const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
