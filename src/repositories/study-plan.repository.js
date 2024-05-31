const { StudyPlan } = require('../models');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

const findAll = async () => {
  const data = await StudyPlan.findAll();
  return data;
};

const findById = async (id) => {
  const data = await StudyPlan.findByPk(id);

  if (!data) {
    throw new NotFoundError('Study plan not found!');
  }

  return data;
};

const destroy = async (id) => {
  const studyPlan = await StudyPlan.findByPk(id);
  if (!studyPlan) {
    throw new NotFoundError('Study plan not found!');
  }
  return studyPlan.destroy();
};

module.exports = {
  findAll,
  findById,
  NotFoundError,
  destroy,
};
