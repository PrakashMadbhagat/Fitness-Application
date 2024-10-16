const express = require('express');
const router = express();
const controller = require('../controllers/adminController')

router.get('/getuser', controller.GetUser);
router.delete('/:id', controller.DeleteUser);
router.post('/fitness-program', controller.CreateProgram);
router.get('/fitness-program', controller.GetProgram);

module.exports = router;
