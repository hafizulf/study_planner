'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('study_plans', 'studentId', 'student_id');
    await queryInterface.renameColumn('study_plans', 'subjectId', 'subject_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('study_plans', 'student_id', 'studentId');
    await queryInterface.renameColumn('study_plans', 'subject_id', 'subjectId');
  },
};
