const { Router } = require('express');
const {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} = require('../controllers/user.controllers.js');
const {
  addUserSchema,
} = require('../middlewares/validators/user.validation.middleware.js');
const {
  checkValidation,
} = require('../middlewares/checkValidation.middleware.js');

const userRoutes = Router();

userRoutes.post('/', addUserSchema, checkValidation, addUser);
userRoutes.patch('/', updateUser);
userRoutes.get('/', getUser);
userRoutes.delete('/', deleteUser);

module.exports = userRoutes