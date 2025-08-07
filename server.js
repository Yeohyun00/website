const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/publications', (req, res) => {
  res.sendFile(path.join(__dirname, 'publications.html'));
});

app.get('/data-manipulation', (req, res) => {
  res.sendFile(path.join(__dirname, 'data-manipulation.html'));
});

app.get('/shorts-intervention', (req, res) => {
  res.sendFile(path.join(__dirname, 'shorts-intervention.html'));
});

app.get('/oxynizer', (req, res) => {
  res.sendFile(path.join(__dirname, 'oxynizer.html'));
});

app.get('/chorogi', (req, res) => {
  res.sendFile(path.join(__dirname, 'chorogi.html'));
});

app.get('/fluidtrack', (req, res) => {
  res.sendFile(path.join(__dirname, 'fluidtrack.html'));
});

app.get('/a-step', (req, res) => {
  res.sendFile(path.join(__dirname, 'a-step.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});