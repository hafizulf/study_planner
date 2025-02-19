const service = require('../services/study-plan.service');

const findAll = async (req, res) => {
  const data = await service.findAll();
  return res.status(200).json({
    message: 'Study plans fetched successfully',
    data,
  });
};

const findByStudentId = async (req, res, next) => {
  try {
    const data = await service.findAllByStudentId(req.params.studentId);
    return res.status(200).json({
      message: 'Study plan students fetched successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
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

const update = async (req, res, next) => {
  try {
    const data = await service.update({
      ...req.params,
      ...req.body,
    });
    return res.status(200).json({
      message: 'Study plan updated successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  findByStudentId,
  findById,
  destroy,
  store,
  update,
};
