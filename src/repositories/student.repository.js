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

const update = async (props) => {
  const student = await Student.findByPk(props.id);

  if (!student) {
    throw new NotFoundError('Student not found!');
  }

  return student.update(props);
}

module.exports = {
  findAll,
  store,
  findById,
  NotFoundError,
  update,
}
