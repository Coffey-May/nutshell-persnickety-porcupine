// created by Adrian

let events = []

export const useEvents = () => {
    return events.slice();
};


export const editEvents = (eventsObject) => {
  return fetch(`http://localhost:8088/events/${eventsObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(eventsObject)
  })
      .then(getEvents)

}

export const deleteEvents = (eventsId) => {
  return fetch(`http://localhost:8088/Events/${eventsId}`, {
      method: "DELETE"
  })
  .then(getEvents)
}

export const getEvents = () => {
    return fetch('http://localhost:8088/events', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedEvents => {
           
            events = parsedEvents.slice()
        })

    }

export const saveEvent = event => {
    fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
}

