const { Student } = require('../models');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

const findAll = async () => {
  const data = await Student.findAll();
  return data;
};

const store = async (props) => {
  const createdStudent = await Student.create(props);
  return createdStudent;
}

const findById = async (id) => {
  const data = await Student.findByPk(id);

  if (!data) {
    throw new NotFoundError('Student not found!');
  }

  return data;
}

module.exports = {
  findAll,
  store,
  findById,
  NotFoundError,
}
