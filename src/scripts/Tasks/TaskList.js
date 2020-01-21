//Coffey setup the task list
import { useTasks,deleteTasks } from "./TaskProvider.js"
import {taskFormComponent} from "./TaskForm.js"

import {useUsers} from "../Users/UserProvider.js"
import { TaskComponent } from "./Task.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".taskList")


export const TaskList = () => {
    const tasks = useTasks()
    const users = useUsers()

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
    ///////////////////////
  
    const render = (arrayOfTasks, arrayOfUsers) => {
        
        contentTarget.innerHTML = `
        

            ${
                arrayOfTasks.map(
                    task => {
                         return TaskComponent(task)
                        
                    }
                ).join("")
            }
        `
    }

    render(tasksStillNeedCompleted)
}







