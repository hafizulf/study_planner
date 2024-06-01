const service = require('../services/study-plan.service');

const findAll = async (req, res) => {
  const data = await service.findAll();
  return res.status(200).json({
    message: 'Study plans fetched successfully',
    data,
  });
};

const findById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return res.status(200).json({
      message: 'Study plan fetched successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await service.destroy(req.params.id);
    return res.status(200).json({
      message: 'Study plan deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const data = await service.store(req.body);
    return res.status(201).json({
      message: 'Study plan created successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  findById,
  destroy,
  store,
};
