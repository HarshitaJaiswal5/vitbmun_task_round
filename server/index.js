const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(cors({
  origin: "https://vitbmun-task-round-one.vercel.app/",
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});


app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  app.get('/', (req, res) => {
  res.send('Welcome to the Backend Server!');
});

  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!', data: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact form data.', error: error.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;
