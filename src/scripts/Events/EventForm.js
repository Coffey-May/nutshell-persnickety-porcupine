//Initial setup by Coffey
import {getEvents,useEvents,saveEvent }from "../Events/EventProvider.js"
import {EventList} from "./EventList.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eventsDiv')

export const EventFormComponent = () => {

    eventHub.addEventListener("click", clickEvent => {
        
        if (clickEvent.target.id === "saveBtnEvent") {
            // Get what user entered
           
            const newEvent = document.querySelector(".eventName").value
            const newEventDate = document.querySelector(".eventDate").value
            const newEventLocation = document.querySelector(".eventLocation").value


            const newEventObject = {
               
                "eventName": newEvent,
                "dateTime": newEventDate,
                "eventLocation": newEventLocation,
                "userId": sessionStorage.getItem("activeUser")
                
            }
            const message = new CustomEvent("eventStateChanged")
            console.log(newEventObject)
            // Change the app state
            saveEvent(newEventObject).then(() => eventHub.dispatchEvent(message)
            )

            // Dispatch a custom event that state was changed
            
        }  
    })

  


const render = () => {

    contentTarget.innerHTML = `
  <h2>EVENTS</h2>
  <div class="eventForm">
      <form action="">
         
          <label for="">Name</label>
          <input class="eventName"type="text"><br>
          <label for="">Date</label>
          <input class="eventDate"type="date"><br>
          <label for="">Location</label>
          <input class="eventLocation"type="text">
      </form>
      <button id="saveBtnEvent">Save Event</button>
     
      </div><br>
     
  
  `
  }
  render()
  };