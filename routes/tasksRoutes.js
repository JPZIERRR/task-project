const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.post('/add', TaskController.createTaskSave);
router.post('/remove', TaskController.removeTask);
router.post('/edit', TaskController.updateTaskSave);
router.post('/updatestatus', TaskController.toggleStatus);
router.get('/add', TaskController.createTask);
router.get('/edit/:id', TaskController.updateTask);
router.get('/', TaskController.showTasks);

module.exports = router;
