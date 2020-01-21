//Initial setup by Coffey
import {getEvents,useEvents,saveEvent, editEvent }from "../Events/EventProvider.js"
import {EventList} from "./EventList.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eventsDiv')

export const EventFormComponent = () => {
    eventHub.addEventListener("editEventButtonClicked", clickEvent => {
        console.log("edit Event button was clicked")
        const EventToBeEdited = clickEvent.detail.id
        const allEventsArray = useEvents()
        const theFoundEvent = allEventsArray.find(
            (currentEventObject) => {
                return currentEventObject.id === parseInt(EventToBeEdited, 10)
            }
        )
        document.querySelector("#event-id").value=theFoundEvent.id
        document.querySelector(".eventCardName").value=theFoundEvent.eventName
        document.querySelector(".eventCardDate").value=theFoundEvent.dateTime
        document.querySelector(".eventCardLocation").value=theFoundEvent.eventLocation
        


       

    })
    
    
    eventHub.addEventListener("click", clickEvent => {

        
        if (clickEvent.target.id === "saveBtnEvent") {
            const hiddenEventInputValue = document.querySelector("#event-id").value
            if (hiddenEventInputValue !== "") {
                const editedEvent =
                {
                    "id": parseInt(document.querySelector("#event-id").value, 10),
                    "eventName": document.querySelector(".eventName").value,
                    "dateTime": document.querySelector(".eventDate").value,
                    "eventLocation": document.querySelector(".eventLocation").value,
                    "userId": sessionStorage.getItem("activeUser")

                }
                editEvent(editedEvent).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("eventHasBeenEdited"))
                })
            }
            else {
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
    } 
    })

  


const render = () => {

    contentTarget.innerHTML = `
  <h2>EVENTS</h2>
  <div class="eventForm">
      <form action="">
      <input type="hidden" id="event-id">
         
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