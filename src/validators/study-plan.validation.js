const { body, param } = require('express-validator');

const getStudyPlanValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id is required')
    .isInt()
    .withMessage('Id must be an integer'),
];

const deleteStudyPlanValidator = getStudyPlanValidator;

module.exports = {
  getStudyPlanValidator,
  deleteStudyPlanValidator,
};
