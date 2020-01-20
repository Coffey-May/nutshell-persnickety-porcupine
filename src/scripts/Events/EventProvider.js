// created by Adrian
let events = [];

export const useEvents = () => events.slice();

export const getEvents = () => {
  return fetch("http://localhost:8088/events")
    .then(res => res.json())
    .then(resp => {
      events = resp
        .slice()
        .sort(
          (currentEvent, nextEvent) =>
            Date.parse(currentEvent.date) - Date.parse(nextEvent.date)
        );
      return events;
    });
};

export const saveEvent = event => {
  return fetch("http://localhost:8088/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  }).then(getEvents);
};

export const deleteEvent = eventId => {
  return fetch(`http://localhost:8088/events/${eventId}`, {
    method: "DELETE"
  }).then(getEvents);
};

export const editEvent = event => {
  return fetch(`http://localhost:8088/events/${event.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  }).then(getEvents);
};

