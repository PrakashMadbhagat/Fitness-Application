const mongoose = require('mongoose');

const workoutLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    activity: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    caloriesBurned: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('WorkoutLog', workoutLogSchema);
