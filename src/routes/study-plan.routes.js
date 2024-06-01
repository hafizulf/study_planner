const express = require('express');
const router = express.Router();
const controller = require('../controllers/study-plan.controllers');
const {
  getStudyPlanByStudentValidator,
  getStudyPlanValidator,
  deleteStudyPlanValidator,
  updateStudyPlanValidator,
} = require('../validators/study-plan.validation');
const validate = require('../middleware/validate');
const { createStudyPlanValidator } = require('../validators/study-plan.validation');

router
  .get('/', controller.findAll)
  .get(
    '/students/:studentId',
    getStudyPlanByStudentValidator,
    validate,
    controller.findByStudentId
  )
  .get('/:id', getStudyPlanValidator, validate, controller.findById)
  .delete('/:id', deleteStudyPlanValidator, validate, controller.destroy)
  .post('/', createStudyPlanValidator, validate, controller.store)
  .put(
    '/students/:studentId',
    updateStudyPlanValidator,
    validate,
    controller.update
  );

module.exports = router;
