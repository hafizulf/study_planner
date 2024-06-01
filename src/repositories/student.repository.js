const { Student } = require('../models');
const NotFoundError = require('../exceptions/NotFoundError');

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

const destroy = async (id) => {
  const student = await Student.findByPk(id);
  if (!student) {
    throw new NotFoundError('Student not found!');
  }
  return student.destroy();
}

module.exports = {
  findAll,
  store,
  findById,
  update,
  destroy,
}
