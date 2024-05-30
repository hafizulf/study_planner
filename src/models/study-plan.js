'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudyPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudyPlan.belongsTo(models.Student, {
        foreignKey: 'studentId',
        as: 'student'
      });
      StudyPlan.belongsTo(models.Subject, {
        foreignKey: 'subjectId',
        as: 'subject'
      });
    }
  }
  StudyPlan.init({
    id: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'study_plan',
    tableName: 'study_plans',
    underscored: true,
  });
  return StudyPlan;
};
