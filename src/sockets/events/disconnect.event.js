const disconnectEvent = (socket, io) => {
  socket.on('disconnect', () => {
    console.log(`User dicsconnected: ${socket.id}`);
  });
};

module.exports = { disconnectEvent };
