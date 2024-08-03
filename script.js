document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        const taskIcon = document.createElement('Icon');
        taskIcon.textContent = taskText;

        const checkIcon = document.createElement('i');
        checkIcon.className = 'fa-solid fa-check';
        checkIcon.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(checkIcon);
        li.appendChild(deleteIcon);
        li.appendChild(taskIcon);

        taskList.appendChild(li);

        taskInput.value = '';
    }
});
