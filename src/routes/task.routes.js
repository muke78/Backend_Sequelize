import { Router } from 'express';
import { createTask, getTask } from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/tasks', getTask);
// router.get('/taks/:id');
router.post('/tasks', createTask);
// router.put('/tasks/:id');
// router.delete('/taks/:id');

export default router;
