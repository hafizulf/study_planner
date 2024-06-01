const repository = require('../repositories/study-plan.repository');
const studentRepository = require('../repositories/student.repository');
const subjectRepository = require('../repositories/subject.repository');
const BadRequestError = require('../exceptions/BadRequestError');
const NotFoundError = require('../exceptions/NotFoundError');

const findAll = async () => {
  const result = await repository.findAll();

  // Transform the data to group subjects by studentId
  const groupedData = result.reduce((acc, item) => {
    const { studentId, subject } = item;

    if (!acc[studentId]) {
      acc[studentId] = {
        studentId: studentId,
        name: item.student.name,
        subjects: [],
      };
    }

    acc[studentId].subjects.push({
      id: subject.id,
      name: subject.name,
    });

    return acc;
  }, {});

  // Convert the object to an array
  const response = Object.values(groupedData);
  return response;
};

const findAllByStudentId = async (studentId) => {
  const result = await repository.findAllByStudentId(studentId);

  if (result.length === 0) {
    throw new NotFoundError('Study plan not found!');
  }

  return {
    studentId: result[0].studentId,
    name: result[0].student.name,
    subjects: result.map((item) => ({
      id: item.subject.id,
      name: item.subject.name,
    })),
  };
};

const findById = async (id) => {
  const result = await repository.findById(id);
  return result;
};

const destroy = async (id) => {
  const result = await repository.destroy(id);
  return result;
};

const store = async (props) => {
  const { studentId, subjectIds } = props;

  await studentRepository.findById(studentId);

  if (subjectIds.length > 3) {
    throw new BadRequestError('Student can not add more than 3 subjects');
  }

  const subjects = await subjectRepository.findAllByIds(subjectIds);
  if (subjects.length !== subjectIds.length) {
    throw new NotFoundError('One or more subjects not found!');
  }

  for (const subjectId of subjectIds) {
    const isTaken = await repository.findAllBySubjectId(subjectId);
    if (isTaken.length >= 4) {
      throw new BadRequestError(
        `Subject with id ${subjectId} already taken by 4 students. Remove it from your study plan first!`
      );
    }
  }

  await repository.bulkUpsert(props);
};

module.exports = {
  findAll,
  findAllByStudentId,
  findById,
  destroy,
  store,
};
