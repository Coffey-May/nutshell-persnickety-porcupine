//Initial code by Adrian

export const TaskComponent = tasks => {
  return `
    <section class="taskCard">
    <div class="taskCardName">Name: ${tasks.taskName}</div>
    <div class="tasksCardETA" type="date">Complete by: ${tasks.taskETA}</div>
    <div class="tasksCardCompletion" input type="radio" value="completed"></div>
    </section>
  `;
};


