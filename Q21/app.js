const express = require('express');
const client = require('prom-client');
const app = express();
const PORT = 3000;

// White-box: collect metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// A simple counter example
const counter = new client.Counter({
  name: 'page_visits_total',
  help: 'Total number of visits to /',
});

app.get('/', (req, res) => {
  counter.inc(); // Increment metric
  res.send('Welcome to the monitored app!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
