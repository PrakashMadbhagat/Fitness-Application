const express = require('express');
const router = express();
const controller = require('../controllers/workoutController')

router.post('/', controller.createWorkoutLog);
router.get('/', controller.getWorkoutLog);
router.patch('/:id', controller.updateWorkoutLog);
router.delete('/:id', controller.deleteWorkoutLog);

module.exports = router;

