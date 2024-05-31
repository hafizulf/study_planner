const { body, param } = require('express-validator');

const createStudentValidator = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string'),
];

const getStudentValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id is required')
    .isInt()
    .withMessage('Id must be an integer'),
];

module.exports = {
  createStudentValidator,
  getStudentValidator,
};
