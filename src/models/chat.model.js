const { model, Schema } = require('mongoose');
const {
  CHATS,
  GROUP_CHAT,
  INDIVUDUAL_CHAT,
  MESSAGES,
  USERS,
} = require('../constants/enums.js');

const ChatSchema = new Schema(
  {
    participants: {
      type: [{ type: Schema.Types.ObjectId, ref: USERS }],
      validate: {
        validator: function (val) {
          return val.length >= 2;
        },
        message: 'At least 2 participants are required for a chat',
      },
      required: true,
    },
    type: {
      type: String,
      enum: [INDIVUDUAL_CHAT, GROUP_CHAT],
      required: true,
    },
    last_message_time: { type: Date, default: null },
    messages: {
      type: [{ type: Schema.Types.ObjectId, ref: MESSAGES }],
      default: [],
    },
    is_archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ChatModel = model(CHATS, ChatSchema);
module.exports = { ChatModel };
