const Goal = require('../models/Goal')

const CreateGoal = async (req, res) => {
    try {
        const { goalType, target, frequency } = req.body;
        const goal = new Goal({
            goalType,
            target,
            progress: 0,
            frequency,
            userId: req.user.userId,
            startDate: new Date(),
            endDate: calculateEndDate(frequency),
        });
        await goal.save();
        res.status(201).json({ message: 'Goal create successfully', goal });
    } catch (error) {
        res.status(500).json({ message: 'Error creating goal', error: error.message });
    }
}
const GetGoal = async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.user.userId });
        res.status(201).json({ message: 'Goal fetch successfully', goals });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching goal', error: error.message });
    }
}
const UpdateGoal = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json({ message: 'Goal update successfully', updatedGoal });
    } catch (error) {
        res.status(500).json({ message: 'Error updateing goal', error: error.message });
    }
}
const DeleteGoal = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteGoal = await Goal.findByIdAndDelete(id);
        res.status(201).json({ message: 'Goal update successfully', deleteGoal });
    } catch (error) {
        res.status(500).json({ message: 'Error updateing goal', error: error.message });
    }
}
const TrackProgress = async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.user.userId });
        const progressData = goals.map(goal => ({
            goalType: goal.goalType,
            target: goal.target,
            progress: goal.progress,
            frequency: goal.frequency,
            remaining: goal.target - goal.progress,
            endDate: goal.endDate,
        }));
        res.status(201).json({ message: 'Goal progress tracked successfully', progressData });
    } catch (error) {
        res.status(500).json({ message: 'Error tracking progress', error: error.message });
    }
}
function calculateEndDate(frequency) {
    const today = new Date();
    let endDate;

    if (frequency === 'weekly') {
        endDate = new Date(today);
        endDate.setDate(today.getDate() + 7);
    } else if (frequency === 'monthly') {
        endDate = new Date(today);
        endDate.setMonth(today.getMonth() + 1);
    } else {
        endDate = new Date(today);
    }

    return endDate;
}

module.exports = {CreateGoal , GetGoal , UpdateGoal , DeleteGoal , TrackProgress}