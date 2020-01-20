//Initial code by Adrian

export const TaskComponent = tasks => {
  return `
    <section class="taskCard">
    <div class="taskCardName">Name: ${tasks.taskName}</div>
    <div class="tasksCardETA">Complete by: ${tasks.taskETA}</div>
    <div class="tasksCardURL">Link: ${tasks.taskURL}</div>
    </section>
  `;
};


