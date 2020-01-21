//Coffey initial setup of the event list    
// import { useTasks } from "./TaskProvider.js"
import { useUsers, getUsers, saveUser } from "../Users/UserProvider.js"
import { EventComponent } from "./Event.js"
import { EventFormComponent } from "./EventForm.js"
import { useEvents, deleteEvent } from "./EventProvider.js"
// import { BuildingCount } from "./BuildingCount.js"
// import { BuildingCard } from "./BuildingCard.js"

const eventHub = document.querySelector(".container")
let contentTarget = document.querySelector(".eventList")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addBtnEvent") {
    return EventFormComponent()
  }
})

export const EventList = () => {
    const events = useEvents()
    const users = useUsers()
    
  
    eventHub.addEventListener("eventStateChanged", event => {
        const updatedEvents = useEvents()
        const updatedUsers = useUsers()
        render(updatedEvents, updatedUsers)
    })

    eventHub.addEventListener("userStateChanged", event => {
        const updatedUsers = useUsers()
        const updatedEvents = useEvents()
        render(updatedEvents, updatedUsers)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteEventBtn--")) {
            
            const [prefix, id] = clickEvent.target.id.split("--")
            console.log(id)
            deleteEvent(id).then(
        () => {
            const updatedEvents = useEvents()
            render(updatedEvents)
        })
           
    }
})


     //STILL NEEDS WORK
    const render = (arrayOfEvents, arrayOfUsers) => {

        contentTarget.innerHTML = `
         

            ${
                arrayOfEvents.map(
                    event => {
                        return EventComponent(event, arrayOfUsers)
                    }
                ).join("")
            }
        `
    }

    render(events, users)
}