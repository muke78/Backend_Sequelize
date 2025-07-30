import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const task = await Task.findAll();
    return res.json(task);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    return res.json(newTask);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    task.set(req.body);
    await task.save();
    return res.json(task);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const { name } = await Task.findByPk(id);

    await Task.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({
      success: true,
      message: `Se borro con exito la tarea ${name}`,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
