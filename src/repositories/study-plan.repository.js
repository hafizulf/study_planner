const {
  StudyPlan,
  Subject,
  Student,
  Sequelize,
  sequelize,
} = require('../models');
const NotFoundError = require('../exceptions/NotFoundError');

const findAll = async () => {
  const data = await StudyPlan.findAll({
    include: [
      {
        model: Subject,
        as: 'subject',
        attributes: ['id', 'name'],
      },
      {
        model: Student,
        as: 'student',
        attributes: ['id', 'name'],
      },
    ],
  });
  return data;
};

const findAllByStudentId = async (studentId) => {
  const data = await StudyPlan.findAll({
    where: {
      studentId,
    },
    include: [
      {
        model: Subject,
        as: 'subject',
        attributes: ['id', 'name'],
      },
      {
        model: Student,
        as: 'student',
        attributes: ['id', 'name'],
      },
    ],
  });

  if (!data) {
    throw new NotFoundError('Study plan not found!');
  }

  return data;
};

const findById = async (id) => {
  const data = await StudyPlan.findByPk(id, {
    attributes: ['id', 'studentId', 'subjectId'],
  });
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

const findAllBySubjectId = async (subject_id) => {
  const data = await StudyPlan.findAll({
    where: {
      subject_id,
    },
  });
  return data;
};

const findAllBySubjectIdForUpdate = async (
  studentId,
  subject_id,
) => {
  const data = await StudyPlan.findAll({
    where: {
      subject_id,
      student_id: {
        [Sequelize.Op.ne]: studentId,
      },
    },
  });
  return data;
};

const findAllByStudentIdAndSubjectIds = async (
  studentId,
  subjectIds
) => {
  const data = await StudyPlan.findAll({
    where: {
      studentId,
      subjectId: {
        [Sequelize.Op.in]: subjectIds,
      },
    },
  });
  return data;
};

const bulkDelete = async (planIds, options) => {
  await StudyPlan.destroy({
    where: {
      id: {
        [Sequelize.Op.in]: planIds,
      },
    },
    transaction: options.transaction,
  });
};

const bulkCreate = async (
  studentId,
  subjectIds,
  options = {},
) => {
  const { transaction } = options;
  for (const subjectId of subjectIds) {
    const [studyPlan, created] = await StudyPlan.findOrCreate({
      where: {
        student_id: studentId,
        subject_id: subjectId,
      },
      defaults: {
        student_id: studentId,
        subject_id: subjectId,
      },
      ...(transaction && { transaction }),
    });

    if (!created) {
      await studyPlan.update(
        {
          student_id: studentId,
          subject_id: subjectId,
        },
        { transaction }
      );
    }
  }
};

module.exports = {
  findAll,
  findAllByStudentId,
  findById,
  destroy,
  findAllBySubjectId,
  findAllBySubjectIdForUpdate,
  findAllByStudentIdAndSubjectIds,
  bulkDelete,
  bulkCreate,
};
