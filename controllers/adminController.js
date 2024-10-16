const User = require('../models/User');
const FitnessProgram = require('../models/FitnessProgram')

const GetUser = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(201).json({ message: "Get user successfully", users })
    } catch (error) {
        res.status(201).json({ message: "Error getting user ", error: error.message })
    }
}
const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(201).json({ message: "Delete user successfully", deletedUser })
    } catch (error) {
        res.status(201).json({ message: "Error deleting user ", error: error.message })
    }
}
const CreateProgram = async (req, res) => {
    try {
        const { title, description, duration } = req.body;
        const program = new FitnessProgram({
            title,
            description,
            duration,
            createdBy: req.user.userId
        });
        await program.save();
        res.status(201).json({ message: "Create fitness program successfully", program })
    } catch (error) {
        res.status(201).json({ message: "Error creating fitness program ", error: error.message })
    }
}
const GetProgram = async (req, res) => {
    try {
        const programs = await FitnessProgram.find().populate('createdBy', 'username');
        res.status(201).json({ message: "Create fitness program successfully", programs })
    } catch (error) {
        res.status(500).json({ message: 'Error getting fitness programs', error : error.message});
    }
}
 
module.exports = {GetUser , DeleteUser , CreateProgram , GetProgram }