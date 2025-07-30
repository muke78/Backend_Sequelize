import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id',
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetKey: 'id',
});
