//Initial code by Adrian

export const TaskComponent = tasks => {
  return `
    <div class="taskCard">
        <p class="taskCardName">Name: ${tasks.taskName}</p>
        <p class="tasksCardETA">Complete by: ${tasks.taskETA}</p>
        <p class="tasksCardETA">Complete by: ${tasks.taskCompletion}</p>
        <p class="tasksCardURL">Link: ${tasks.userId}</p>
    </div>
        <button class="editTaskBtn">Edit</button>
        <button class="deleteTaskBtn">Delete</button>
        <label for="">Tasks-Completion</label>
        <input class="taskInput" type="checkbox">
  `;
};


