import { Project } from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    if (!project)
      return res.status(404).json({ message: 'Project does not exist' });
    res.json(project);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const { name } = await Project.findByPk(id);
    await Project.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      success: true,
      message: `Se borro con exito el proyecto ${name}`,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
