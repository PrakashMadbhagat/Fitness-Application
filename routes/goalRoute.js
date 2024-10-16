const express = require('express');
const router = express();
const controller = require('../controllers/goalController')

router.post('/',controller.CreateGoal)
router.get('/',controller.GetGoal)
router.patch('/:id',controller.UpdateGoal)
router.delete('/:id',controller.DeleteGoal)
router.get('/track',controller.TrackProgress)

module.exports = router;

