function submitTask() {
    const taskInput = document.getElementById('taskInput').value;
    fetch('/submitTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskInput })
    })
        .then(response => response.json())
        .then(data => {
            const taskId = data.taskId;
            checkTaskStatus(taskId);
        })
        .catch(error => console.error('Error:', error));
}

function checkTaskStatus(taskId) {
    fetch(`/taskStatus/${taskId}`)
        .then(response => response.json())
        .then(data => {
            const status = data.status;
            const taskStatusDiv = document.getElementById('taskStatus');
            taskStatusDiv.innerHTML = `Task status: ${status}`;
        })
        .catch(error => console.error('Error:', error));
}
