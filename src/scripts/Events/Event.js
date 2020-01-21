// Initial code by Adrian

export const EventComponent = event => {
  return `
    <section class="eventCard">
    <h3><strong>NEW EVENT</strong></h3>
      <p class="eventCardName">Name: ${event.eventName}</p>
      <p class="eventCardDate">Date: ${event.dateTime}</p>
      <p class="eventCardLocation">Location: ${event.eventLocation}</p>
      <button>Edit Event</button>
     <button id="deleteEventBtn--${event.id}">Delete Event</button>  
     
     

    </section>
  `;
};