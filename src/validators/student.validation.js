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

const updateStudentValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id is required')
    .isInt()
    .withMessage('Id must be an integer'),
  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),
];

module.exports = {
  createStudentValidator,
  getStudentValidator,
  updateStudentValidator,
};
