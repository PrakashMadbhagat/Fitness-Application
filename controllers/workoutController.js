const WorkoutLog = require('../models/Workoutlog');

const createWorkoutLog = async (req, res) => {
  try {
    const workoutLog = new WorkoutLog({ ...req.body, userId: req.user.userId });
    await workoutLog.save();
    res.status(201).json({ message: 'Workout log create successfully', workoutLog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating workout log', error });
  }
};

const getWorkoutLog = async (req, res) => {
  try {
    const logs = await WorkoutLog.find({ userId: req.user.userId });
    res.status(201).json({ message: 'Workout log fetching successfully', logs })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workout log', error });
  }
}

const updateWorkoutLog = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedWorkoutLog = await WorkoutLog.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(updatedWorkoutLog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating workout log', error });
  }
}

const deleteWorkoutLog = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteWorkoutLog = await WorkoutLog.findByIdAndDelete(id);
    if (!deleteWorkoutLog) {
      return res.status(404).json({ message: 'Log not found' });
    }
    res.status(200).json({ message: 'Workout log deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error error workout log', error });
  }
}

module.exports = {createWorkoutLog , getWorkoutLog , updateWorkoutLog , deleteWorkoutLog}