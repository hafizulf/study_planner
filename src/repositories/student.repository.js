const { Student } = require('../models');

const findAll = async () => {
  const data = await Student.findAll();
  return data;
};

const store = async (props) => {
  const createdStudent = await Student.create(props);
  return createdStudent;
}

module.exports = {
  findAll,
  store,
}
