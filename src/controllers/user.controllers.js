const { UserModel } = require('../models/user.model.js');

const addUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const checkIfUserExist = await UserModel.findOne({ email });
    if (checkIfUserExist) {
      return res.status(400).send({ message: 'email already exists' });
    }
    const payload = { name, email, password };
    if (phone) {
      payload.phone = phone;
    }
    await UserModel.create(payload);
    return res.status(200).send({ message: 'user created successfully' });
  } catch (error) {
    return res.status(400).send(`Error: ${error.message}`);
  }
};

const updateUser = async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
    is_online,
    contacts,
    individual_chats,
    group_chats,
  } = req.body;
  try {
    const checkIfUserExist = await UserModel.findOne({ email });
    if (!checkIfUserExist) {
      return res.status(400).send({ message: 'user does not exists' });
    }
    const payload = {};
    if (name) {
      payload.name = name;
    }
    if (phone) {
      payload.phone = phone;
    }
    if (is_online !== undefined) {
      payload.is_online = is_online;
    }
    if (contacts) {
      payload.contacts = contacts;
    }
    if (individual_chats) {
      payload.individual_chats = individual_chats;
    }
    if (group_chats) {
      payload.group_chats = group_chats;
    }

    const updated = await UserModel.findOneAndUpdate(
      { email },
      { $set: payload },
      { new: true }
    );
    return res.status(200).send({ message: 'Updation Successful', updated });
  } catch (error) {
    return res.status(400).send(`Error: ${error.message}`);
  }
};
const getUser = (req, res) => {
  console.log(req.body);
  return res.status(200).send('ok');
};
const deleteUser = (req, res) => {
  console.log(req.body);
  return res.status(200).send('ok');
};

module.exports = { addUser, updateUser, getUser, deleteUser };
