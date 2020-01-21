//Coffey setup the task list
import { useTasks,deleteTasks, editTasks } from "./TaskProvider.js"
import {taskFormComponent} from "./TaskForm.js"

import {useUsers} from "../Users/UserProvider.js"
import { TaskComponent } from "./Task.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".taskList")


export const TaskList = () => {
    const tasks = useTasks()
    const users = useUsers()
    
    eventHub.addEventListener("TaskHasBeenEdited", event => {
        const updatedTasks = useTasks()
        render(updatedTasks)
    })
    eventHub.addEventListener("newTaskCreated", event => {
        const updatedTasks = useTasks()
        const updatedUsers = useUsers()
        render(updatedTasks, updatedUsers)
    })

    eventHub.addEventListener("userStateChanged", event => {
        const updatedUsers = useUsers()
        const updatedTasks = useTasks()
        render(updatedTasks, updatedUsers)
       
    })
  
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editTaskBtn--")) {
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")
  
            const editTask = new CustomEvent("editTaskButtonClicked", {
                detail: {
                    taskId: taskId
                }
            })
  
            eventHub.dispatchEvent(editTask)
        }
    })
  

// ///////////////////////
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteTaskBtn--")) {
            
            const [prefix, id] = clickEvent.target.id.split("--")
            console.log(id)
    deleteTasks(id).then(
        () => {
            const updatedTasks = useTasks()
            render(updatedTasks)
        })
           
    }
})
const checkbox = document.querySelector(".taskInput");

checkbox.addEventListener( "change", function(evt) {
    if(evt.target.id.startsWith("taskInput--")) {
        const [prefix, id] = change.checked.target.id.split("--")
}
})
    ///////////////////////
  
    const render = (arrayOfTasks, arrayOfUsers) => {
        
        contentTarget.innerHTML = `
        

            ${
                arrayOfTasks.map(
                    task => {
                         return TaskComponent(task, arrayOfUsers)
                        
                    }
                ).join("")
            }
        `
    }

    render(tasks, users)
}







