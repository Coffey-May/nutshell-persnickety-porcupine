//Coffey setup the task form
import {saveTask }from "./TaskProvider.js"

const contentTarget = document.querySelector('.tasks')
const eventHub = document.querySelector('.container')

let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))
export const taskFormComponent = () => {

  

        eventHub.addEventListener("click", clickEvent => {
            if (clickEvent.target.id === "saveTaskBtn") {
             
                // Get what user entered
                const newTask = document.querySelector(".taskInput").value
                
                const newTaskObject = {
                    "id": Math.floor(Math.random() * 1000) + 4,
                    "taskName": newTask,
                    "taskETA": "02/15/20",
                    "taskCompletion":  "someday",
                    "userId": parseInt(activeUserInitiatorId)
                }
       
                
                // Change the app state
                saveTask(newTaskObject)
    
                // Dispatch a custom event that state was changed
                const message = new CustomEvent("newTaskCreated")
                eventHub.dispatchEvent(message)
            }
        })

const render = () => {
    contentTarget.innerHTML =`
    <h2>TASKS</h2>
    <div>
        <form action="">
            <label for="">Tasks</label>
            <input class="taskInput" type="text">
             </form>
            <button id="saveTaskBtn">Save</button>
            <button class="editTaskBtn">Edit</button>
            <button class="deleteTaskBtn">Delete</button>
            <div class="taskList">New Task:</div>
    </div>`
}
render()
};