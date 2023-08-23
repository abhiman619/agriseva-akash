const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Setup
mongoose.connect('mongodb://localhost/landInfoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const landroutes = require('./routes/landrotes');
app.use('/land', landroutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
