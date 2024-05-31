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

module.exports = {
  findAll,
}
