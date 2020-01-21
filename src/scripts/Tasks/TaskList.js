//Coffey setup the task list
import { useTasks,getTasks } from "./TaskProvider.js"
import {taskFormComponent} from "./TaskForm.js"

import {useUsers} from "../Users/UserProvider.js"
import { TaskComponent } from "./Task.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".taskList")


export const TaskList = () => {
    const tasks = useTasks()
    const users = useUsers()

    eventHub.addEventListener("taskStateChanged", event => {
        const updatedTasks = useTasks()
        const updatedUsers = useUsers()
        render(updatedTasks, updatedUsers)
    })

    eventHub.addEventListener("userStateChanged", event => {
        const updatedUsers = useUsers()
        const updatedTasks = useTasks()
        render(updatedTasks, updatedUsers)
    })
    
  
     //STILL NEEDS WORK
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






