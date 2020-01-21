//Initial code by Adrian

export const TaskComponent = tasks => {
  return `
    <div class="taskCard">
        <p class="taskCardName">Task-Name: ${tasks.taskName}</p>
        <p class="tasksCardETA">Task Expected Completion: ${tasks.taskETA}</p>
        <p class="tasksCardETA">Complete by: ${tasks.taskCompletion}</p>
        <p class="tasksCardURL">Link: ${tasks.userId}</p>
    </div>
        <button class="editTaskBtn">Edit</button>
        <button id="deleteTaskBtn--${tasks.id}">Delete</button>
        <label for="">Tasks-Completion</label>
        <input class="taskInput" type="checkbox">
  `;
};


