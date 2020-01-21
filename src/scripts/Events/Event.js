// Initial code by Adrian

export const EventComponent = event => {
  if (articles.userId === sessionStorage.getItem("activeUser"))
  {
  return `
    <section class="eventCard">
    <h3><strong>NEW EVENT</strong></h3>
      <p class="eventCardName">Name: ${event.eventName}</p>
      <p class="eventCardDate">Date: ${event.dateTime}</p>
      <p class="eventCardLocation">Location: ${event.eventLocation}</p>
      <button id="editEvent--${event.id}>Edit Event</button>
     <button id="deleteEventBtn--${event.id}">Delete Event</button>  
     </section>
  `;
}
else {
  return `
  <section class="eventCard">
  <h3><strong>NEW EVENT</strong></h3>
    <p class="eventCardName">Name: ${event.eventName}</p>
    <p class="eventCardDate">Date: ${event.dateTime}</p>
    <p class="eventCardLocation">Location: ${event.eventLocation}</p>
    
`};

};