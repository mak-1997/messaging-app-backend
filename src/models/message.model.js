const { model, Schema } = require('mongoose');
const { MESSAGES, USERS } = require('../constants/enums.js');

const MessageSchema = Schema(
  {
    content: { type: String, required: true },
    from: { type: Schema.Types.ObjectId, ref: USERS, required: true },
    status: {
      type: String,
      enum: [UNREAD, RECIEVED, SEEN],
      required: true,
    },
  },
  { timestamps: true }
);

const MessageModel = model(MESSAGES, MessageSchema);

module.exports = { MessageModel };
