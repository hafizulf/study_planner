const express = require('express');
const router = express.Router();
const controller = require('../controllers/subject.controllers');
const {
  createSubjectValidator,
  getSubjectValidator,
  updateSubjectValidator,
  deleteSubjectValidator,
} = require('../validators/subject.validation');
const validate = require('../middleware/validate');

router
  .get('/', controller.findAll)
  .post('/', createSubjectValidator, validate, controller.store)
  .get('/:id', getSubjectValidator, validate, controller.findById)
  .put('/:id', updateSubjectValidator, validate, controller.update)
  .delete('/:id', deleteSubjectValidator, validate, controller.destroy);

module.exports = router;
