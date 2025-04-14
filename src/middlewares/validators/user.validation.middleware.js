const { body } = require('express-validator');

const addUserSchema = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('email').trim().notEmpty().withMessage('email is required'),
  body('password').trim().notEmpty().withMessage('password is required'),
];

module.exports = { addUserSchema };
