import { Router } from 'express';
import {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  getProject,
  getProjectTask,
} from '../controllers/projects.controllers.js';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.get('/projects/:id', getProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

router.get('/projects/:id/tasks', getProjectTask);

export default router;
