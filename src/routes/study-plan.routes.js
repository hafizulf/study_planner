const express = require('express');
const router = express.Router();
const controller = require('../controllers/study-plan.controllers');
const {
  getStudyPlanValidator,
  deleteStudyPlanValidator,
} = require('../validators/study-plan.validation');
const validate = require('../middleware/validate');

router
  .get('/', controller.findAll)
  .get('/:id', getStudyPlanValidator, validate, controller.findById)
  .delete('/:id', deleteStudyPlanValidator, validate, controller.destroy);

module.exports = router;
