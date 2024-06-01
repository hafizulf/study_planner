const { Subject, Sequelize } = require('../models');
const NotFoundError = require('../exceptions/NotFoundError');

const findAll = async () => {
  const data = await Subject.findAll();
  return data;
};

const store = async (props) => {
  const createdSubject = await Subject.create(props);
  return createdSubject;
};

const findById = async (id) => {
  const data = await Subject.findByPk(id);

  if (!data) {
    throw new NotFoundError('Subject not found!');
  }

  return data;
};

const update = async (props) => {
  const subject = await Subject.findByPk(props.id);

  if (!subject) {
    throw new NotFoundError('Subject not found!');
  }

  return subject.update(props);
};

const destroy = async (id) => {
  const subject = await Subject.findByPk(id);
  if (!subject) {
    throw new NotFoundError('Subject not found!');
  }
  return subject.destroy();
};

const findAllByIds = async (ids) => {
  const data = await Subject.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: ids,
      }
    }
  });
  return data;
};

module.exports = {
  findAll,
  store,
  findById,
  update,
  destroy,
  findAllByIds,
};
