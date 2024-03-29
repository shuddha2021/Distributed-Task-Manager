const taskScheduler = {
    tasks: {},
    scheduleTask(task) {
        const taskId = Date.now().toString();
        this.tasks[taskId] = { status: 'pending', task };
        this.executeTask(taskId);
        return taskId;
    },
    executeTask(taskId) {
        setTimeout(() => {
            this.tasks[taskId].status = 'completed';
        }, 5000); // Simulating task execution time
    },
    getTaskStatus(taskId) {
        if (this.tasks[taskId]) {
            return this.tasks[taskId].status;
        } else {
            return 'Task not found';
        }
    }
};

module.exports = taskScheduler;
