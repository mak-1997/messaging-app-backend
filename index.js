require('dotenv').config();
const http = require('http');
const socketIO = require('socket.io');
const app = require('./app');
const establishDatabaseConnection = require('./src/db/connectDb');
const { allSocketEvents } = require('./src/sockets/index.socket');

const server = http.createServer(app);
const io = socketIO(server);

// write webSocket logic
io.on('connection', (socket) => {
  console.log(`New user connected: ${socket.id}`);
  allSocketEvents(socket, io);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  await establishDatabaseConnection();
  console.log(`Server is running on port: ${PORT}`);
});
