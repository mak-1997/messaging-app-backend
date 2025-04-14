const messageEvents = (socket, io) => {
  socket.on('message', (message) => {
    console.log(`message recieved: ${message}`);
    socket.broadcast.emit('broadcastMessage', message);
  });
};

module.exports = { messageEvents };
