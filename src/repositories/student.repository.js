const { Student } = require('../models');

console.log('Student model:', Student);  // Debug line

const findAll = async () => {
  if (!Student) {
    throw new Error('Student model is not defined');
  }

  const data = await Student.findAll();
  console.log(data);
  return data;
};

module.exports = {
  findAll,
}
