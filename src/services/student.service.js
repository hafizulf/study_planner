const repository = require('../repositories/student.repository');

const findAll = async () => {
  const data = await repository.findAll();
  return data;
}

module.exports = {
  findAll,
}
