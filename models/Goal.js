const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    goalType: {
        type: String,
        require: true,
    },
    target: {
        type: Number,
        require: true,
    },
    progress: {
        type: Number,
        require: true,
    },
    frequency: {
        type: String,
        enum: ['weekly', 'monthly'], 
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
    }
});

module.exports = mongoose.model('Goal', goalSchema);
