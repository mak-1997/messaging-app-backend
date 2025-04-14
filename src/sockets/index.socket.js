const { disconnectEvent } = require('./events/disconnect.event');
const { messageEvents } = require('./events/message.event');

const allSocketEvents = (socket, io) => {
  messageEvents(socket, io);
  disconnectEvent(socket, io);
};

module.exports = { allSocketEvents };
