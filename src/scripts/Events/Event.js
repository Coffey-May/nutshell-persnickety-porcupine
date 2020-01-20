// Initial code by Adrian

export const EventComponent = event => {
  return `
    <section class="eventCard">
    
      <p class="eventCardName">Name: ${event.eventName}</p>
      <p class="eventCardDate">Date: ${event.dateTime}</p>
      <p class="eventCardLocation">Location: ${event.eventLocation}</p>
      <p>${event.userId}</p>
    </section>
  `;
};