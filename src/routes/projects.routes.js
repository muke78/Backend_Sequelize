import { Router } from 'express';
import {
  createProject,
  getProjects,
} from '../controllers/projects.controllers.js';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
// router.get('/projects/:id');
// router.put('/projects/:id');
// router.delete('/projects/:id');

export default router;
