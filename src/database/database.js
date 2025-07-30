import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sequelize', 'postgres', 'kjn13NJ315LKaS', {
  host: 'localhost',
  dialect: 'postgres',
});


