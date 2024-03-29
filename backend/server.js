const express = require('express');
const app = express();
const taskScheduler = require('./taskScheduler');

app.use(express.json());

// Route to submit tasks
app.post('/submitTask', (req, res) => {
    const task = req.body.task;
    const taskId = taskScheduler.scheduleTask(task);
    res.json({ taskId });
});

// Route to check task status
app.get('/taskStatus/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const status = taskScheduler.getTaskStatus(taskId);
    res.json({ status });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
