const { Subject } = require('../models');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

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

module.exports = {
  findAll,
  store,
  findById,
  NotFoundError,
  update,
  destroy,
};
