'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('study_plans', {
      fields: ['student_id', 'subject_id'],
      type: 'unique',
      name: 'unique_student_subject',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'study_plans',
      'unique_student_subject'
    );
  },
};
