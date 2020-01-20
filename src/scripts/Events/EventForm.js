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
                "id": Math.floor(Math.random() * 1000) + 4,
                "event": newEvent,
                // "eventDate" newEventDate,
                // "location" newEventLocation
            }
            
            // Change the app state
            saveEvent(newEventObject)

            // Dispatch a custom event that state was changed
            const message = new CustomEvent("eventStateChanged")
            eventHub.dispatchEvent(message)
        }  
    })

  


const render = () => {

    contentTarget.innerHTML = `
  <h2>EVENTS</h2>
  <div class="eventForm">
      <form action="">
          <button class="addBtnEvent">Add Event</button><br>
          <label for="">Name</label>
          <input class="eventName"type="text"><br>
          <label for="">Date</label>
          <input class="eventDate"type="date"><br>
          <label for="">Location</label>
          <input class="eventLocation"type="text">
      </form>
      <button id="saveBtnEvent">Save Event</button>
      </div><br>
  <div class="eventList">Event</div>
  `
  }
  render()
  };