//Coffey setup the task form
import { saveTask, useTasks, editTasks } from './TaskProvider.js';
import {TaskList} from "./TaskList.js"

const contentTarget = document.querySelector('.tasks');
const eventHub = document.querySelector('.container');

export const taskFormComponent = () => {
	eventHub.addEventListener("TaskInputChange", event => {
		const CompToBeEdited = event.detail.taskId

		const allTasksArray = useTasks()

		const theFoundedTask = allTasksArray.find(
				(currentTaskObject) => {
						return currentTaskObject.id === parseInt(CompToBeEdited, 10)
				}
		)
		document.querySelector("#task-id").value = theFoundedTask.id
		const editedComp = {
			id: parseInt(document.querySelector("#task-id").value, 10),
			taskCompletion: true
	}
	editTasks(editedComp).then(() => {
			eventHub.dispatchEvent(new CustomEvent("TaskHasBeenEdited"))
	})
			})

	eventHub.addEventListener("editTaskButtonClicked", event => {
		const TasksToBeEdited = event.detail.taskId

		const allTasksArray = useTasks()

		const theFoundedTask = allTasksArray.find(
				(currentTaskObject) => {
						return currentTaskObject.id === parseInt(TasksToBeEdited, 10)
				}
		)
		document.querySelector("#task-id").value = theFoundedTask.id
		document.querySelector("#task-userId").value = theFoundedTask.userId
		document.querySelector(".taskInput").value = theFoundedTask.taskName
		document.querySelector(".taskDate").value = theFoundedTask.taskETA
})

	eventHub.addEventListener('click', (clickEvent) => {
		if (clickEvent.target.id === 'saveTaskBtn') {
			// Get what user entered
			const newTask = document.querySelector('.taskInput').value;
			const taskDate = document.querySelector('.taskDate').value;
			const hiddenInputValue = document.querySelector("#task-id").value

						if (hiddenInputValue !== "") {
							const editedTask = {
									id: parseInt(document.querySelector("#task-id").value, 10),
									taskName: document.querySelector(".taskInput").value,
									userId: parseInt(document.querySelector("#task-userId").value, 10),
									taskETA: document.querySelector(".taskDate").value
							}
							editTasks(editedTask).then(() => {
									eventHub.dispatchEvent(new CustomEvent("TaskHasBeenEdited"))
							})
						
					} else {
				const newTaskObject = {
				"taskName": newTask,
				"taskETA": taskDate,
				"taskCompletion": false,
				"userId":  sessionStorage.getItem("activeUser")
            };
            
            const message = new CustomEvent('newTaskCreated');
			eventHub.dispatchEvent(message);
console.log(newTaskObject)
			// Change the app state
			saveTask(newTaskObject).then(() => eventHub.dispatchEvent(message));
          
			// Dispatch a custom event that state was changed
					}	
		}
	});

	const render = () => {
		contentTarget.innerHTML = `
    <h1 class="task-header">TASKS</h1>
		<div class="taskFormDiv">
		<input type="hidden" id="task-id" />
		<input type="hidden" id="task-userId" />
		<input type="hidden" id="task-taskCompletion" />
		
        <form action="">
            <label for="name">TaskName</label>
            <input class="taskInput" type="text"><br>
            <label for="date">Task-Time</label>
            <input class="taskDate" type="date"><br>
            
             </form>
            <button id="saveTaskBtn">Save</button>
            
            
    </div>`;
	};
	render();
};
