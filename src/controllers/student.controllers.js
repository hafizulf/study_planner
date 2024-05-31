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

const findById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return res
      .status(200)
      .json({
        message: 'Student fetched successfully',
        data,
      })
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const props = {
      ...req.params,
      ...req.body
    };
    const data = await service.update(props);
    return res
      .status(200)
      .json({
        message: 'Student updated successfully',
        data,
      })
  } catch (error) {
    next(error);
  }
}

const destroy = async (req, res, next) => {
  try {
    await service.destroy(req.params.id);
    return res.status(200).json({
      message: 'Student deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  store,
  findById,
  update,
  destroy,
}
