//Coffey setup the task list
//Rebecca updated and filtered by activeUser
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
    
    const setActiveUser = sessionStorage.getItem("activeUser")
    const tasksOfActiveUser = tasks.filter(ts => ts.userId === setActiveUser)
    const tasksStillNeedCompleted = tasksOfActiveUser.filter(t => t.taskCompletion !== true) 
     //STILL NEEDS WORK
    const render = (arrayOfTasks) => {
        
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






