// Initial code by Adrian

export const EventComponent = event => {
  return `
    <section class="eventCard">
    <h1>hi</div>
      <div class="eventCardName">Name: ${event.eventName}</div>
      <div class="eventCardDate">Date: ${event.dateTime}</div>
      <div class="eventCardLocation">Location: ${event.eventLocation}</div>
      <div>${event.userId}</div>
    </section>
  `;
};