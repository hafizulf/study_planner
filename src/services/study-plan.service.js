const repository = require('../repositories/study-plan.repository');

const findAll = async () => {
  const data = await repository.findAll();
  return data;
};

const findById = async (id) => {
  const result = await repository.findById(id);
  return result;
};

const destroy = async (id) => {
  const result = await repository.destroy(id);
  return result;
};

module.exports = {
  findAll,
  findById,
  destroy,
};
