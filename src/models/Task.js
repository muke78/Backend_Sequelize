import { sequelize } from '../database/database.js';
import { DataTypes, UUIDV4 } from 'sequelize';

export const Task = sequelize.define('tasks', {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});


