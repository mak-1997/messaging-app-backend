const { model, Schema } = require('mongoose');
const { CHATS, USERS } = require('../constants/enums.js');

const UserSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, default: '' },
    password: { type: String, required: true },
    is_online: { type: Boolean, default: false },
    contacts: {
      type: [{ type: Schema.Types.ObjectId, ref: USERS }],
      default: [],
    },
    individual_chats: {
      type: [{ type: Schema.Types.ObjectId, ref: CHATS }],
      default: [],
    },
    group_chats: {
      type: [{ type: Schema.Types.ObjectId, ref: CHATS }],
      default: [],
    },
  },
  { timestamps: true }
);

const UserModel = model(USERS, UserSchema);

module.exports = { UserModel };
