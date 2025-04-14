const express = require('express');
const userRoutes = require('./src/routes/user.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  return res.send({ message: 'API is running' });
});

app.use('/user', userRoutes);

module.exports = app;
