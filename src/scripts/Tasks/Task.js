//Initial code by Adrian

export const TaskComponent = tasks => {
  return `
    <div class="taskCard">
        <p class="taskCardName">Name: ${tasks.taskName}</p>
        <p class="tasksCardETA">Complete by: ${tasks.taskETA}</p>
    </div>
        <button id="editTaskBtn--${tasks.id}">Edit</button>
        <button id="deleteTaskBtn--${tasks.id}">Delete</button>
        <label for="">Tasks-Completion</label>
        <input type="checkbox" id="taskInput" >
  `;
};


