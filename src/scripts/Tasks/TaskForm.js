//Coffey setup the task form
import { saveTask } from './TaskProvider.js';
import {TaskList} from "./TaskList.js"

const contentTarget = document.querySelector('.tasks');
const eventHub = document.querySelector('.container');

export const taskFormComponent = () => {
	eventHub.addEventListener('click', (clickEvent) => {
		if (clickEvent.target.id === 'saveTaskBtn') {
			// Get what user entered
			const newTask = document.querySelector('.taskInput').value;
            const taskDate = document.querySelector('.taskDate').value;
            const taskComplete = document.querySelector('.taskComplete').value

			const newTaskObject = {
				"taskName": newTask,
				"taskETA": taskDate,
				"taskCompletion": taskComplete,
				"userId":  sessionStorage.getItem("activeUser")
            };
            
            const message = new CustomEvent('newTaskCreated');
			eventHub.dispatchEvent(message);
console.log(newTaskObject)
			// Change the app state
			saveTask(newTaskObject).then(() => eventHub.dispatchEvent(message));
          
			// Dispatch a custom event that state was changed
			
		}
	});

	const render = () => {
		contentTarget.innerHTML = `
    <h2>TASKS</h2>
    <div>
        <form action="">
            <label for="name">TaskName</label>
            <input class="taskInput" type="text"><br>
            <label for="date">Task-Time</label>
            <input class="taskDate" type="date"><br>
            <label for="text">Task</label>
            <input class="taskComplete" type="text">
            
             </form>
            <button id="saveTaskBtn">Save</button>
            
            
    </div>`;
	};
	render();
};
