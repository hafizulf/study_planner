const { body, param } = require('express-validator');

const getStudyPlanByStudentValidator = [
  param('studentId')
    .notEmpty()
    .withMessage('Student id is required')
    .isInt()
    .withMessage('Student id must be an integer'),
];

const getStudyPlanValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id is required')
    .isInt()
    .withMessage('Id must be an integer'),
];

const deleteStudyPlanValidator = getStudyPlanValidator;

const createStudyPlanValidator = [
  body('studentId')
    .notEmpty()
    .withMessage('Student id is required')
    .isInt()
    .withMessage('Student id must be an integer'),
  body('subjectIds')
    .notEmpty()
    .withMessage(`Subject id's is required`)
    .isArray({ min: 1 })
    .withMessage(`Subject id's must be a non-empty array`)
    .custom((array) => {
      if (array && !array.every(Number.isInteger)) {
        throw new Error(`Subject id's array must contain only integers`);
      }
      return true;
    }),
];

const updateStudyPlanValidator = [
  param('studentId')
    .notEmpty()
    .withMessage('Student id is required')
    .isInt()
    .withMessage('Student id must be an integer'),
  body('oldSubjectIds')
    .notEmpty()
    .withMessage(`Subject id's is required`)
    .isArray({ min: 1 })
    .withMessage(`Subject id's must be a non-empty array`)
    .custom((array) => {
      if (array && !array.every(Number.isInteger)) {
        throw new Error(`Subject id's array must contain only integers`);
      }
      return true;
    }),
  body('newSubjectIds')
    .notEmpty()
    .withMessage(`Subject id's is required`)
    .isArray({ min: 1 })
    .withMessage(`Subject id's must be a non-empty array`)
    .custom((array) => {
      if (array && !array.every(Number.isInteger)) {
        throw new Error(`Subject id's array must contain only integers`);
      }
      return true;
    }),
];

module.exports = {
  getStudyPlanByStudentValidator,
  getStudyPlanValidator,
  deleteStudyPlanValidator,
  createStudyPlanValidator,
  updateStudyPlanValidator,
};
