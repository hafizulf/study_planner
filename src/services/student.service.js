const repository = require('../repositories/student.repository');

const findAll = async () => {
  const data = await repository.findAll();
  return data;
}

const store = async (props) => {
  const result = await repository.store(props);
  return result;
}

const findById = async (id) => {
  const result = await repository.findById(id);
  return result;
}

const update = async (props) => {
  const result = await repository.update(props);
  return result;
}

const destroy = async (id) => {
  const result = await repository.destroy(id);
  return result;
}

module.exports = {
  findAll,
  store,
  findById,
  update,
  destroy,
}
