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
      // StudyPlan.belongsTo(models.Student, {
      //   foreignKey: 'studentId',
      //   as: 'student'
      // });
      // StudyPlan.belongsTo(models.Subject, {
      //   foreignKey: 'subjectId',
      //   as: 'subject'
      // });
    }
  }
  StudyPlan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Student',
          key: 'id',
        },
        allowNull: false,
      },
      subjectId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Subject',
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'StudyPlan',
      tableName: 'study_plans',
      underscored: true,
      paranoid: true,
    }
  );
  return StudyPlan;
};
