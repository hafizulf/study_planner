var express = require('express');
var router = express.Router();
const controller = require('../controllers/student.controllers');
const {
  createStudentValidator,
  getStudentValidator ,
  updateStudentValidator ,
} = require('../validators/student.validation');
const validate = require('../middleware/validate');

router
  .get(
    '/',
    controller.findAll,
  )
  .post(
    '/',
    createStudentValidator,
    validate,
    controller.store,
  )
  .get(
    '/:id',
    getStudentValidator,
    validate,
    controller.findById,
  )
  .put(
    '/:id',
    updateStudentValidator,
    validate,
    controller.update,
  )

module.exports = router;
