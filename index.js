import app from './src/app.js';
import { sequelize } from './src/database/database.js';

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
    app.listen(3000);
    console.log('Server is running on port', 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDatabase();
