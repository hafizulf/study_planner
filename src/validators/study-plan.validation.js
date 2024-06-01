const { body, param } = require('express-validator');

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
      if (!array.every(Number.isInteger)) {
        throw new Error(`Subject id's array must contain only integers`);
      }
      return true;
    }),
];

module.exports = {
  getStudyPlanValidator,
  deleteStudyPlanValidator,
  createStudyPlanValidator,
};
