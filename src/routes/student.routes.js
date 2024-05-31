var express = require('express');
var router = express.Router();
const controller = require('../controllers/student.controllers');
const { createStudentValidator } = require('../validators/student.validation');
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

module.exports = router;
