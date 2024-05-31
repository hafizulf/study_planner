const service = require('../services/student.service');

const findAll = async (req, res) => {
  const data = await service.findAll();
  return res
    .status(200)
    .json({
      message: 'Students fetched successfully',
      data,
    });
};

const store = async (req, res) => {
  const data = await service.store(req.body);
  return res
    .status(201)
    .json({
      message: 'Student created successfully',
      data,
    })
}

module.exports = {
  findAll,
  store,
}
