const { StudyPlan, Sequelize } = require('../models');
const NotFoundError = require('../exceptions/NotFoundError');

const findAll = async () => {
  const data = await StudyPlan.findAll();
  return data;
};

const findById = async (id) => {
  const data = await StudyPlan.findByPk(id);

  if (!data) {
    throw new NotFoundError('Study plan not found!');
  }

  return data;
};

const destroy = async (id) => {
  const studyPlan = await StudyPlan.findByPk(id);
  if (!studyPlan) {
    throw new NotFoundError('Study plan not found!');
  }
  return studyPlan.destroy();
};

const findAllBySubjectId = async (id) => {
  const data = await StudyPlan.findAll({
    where: {
      subject_id: id
    }
  });
  return data;
}

const bulkUpsert = async (props) => {
  const { studentId, subjectIds } = props;

  const studyPlans = subjectIds.map((subjectId) => ({
    studentId,
    subjectId,
  }));

  for (const plan of studyPlans) {
    await StudyPlan.upsert(plan);
  }
};

module.exports = {
  findAll,
  findById,
  // NotFoundError,
  destroy,
  findAllBySubjectId,
  bulkUpsert,
};
