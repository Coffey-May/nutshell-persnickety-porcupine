// initial code by Adrian

let chats = []

export const useChats = () => {
    return chats;
};
export const editChats = (chatsObject) => {
  return fetch(`http://localhost:8088/chats/${chatsObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(chatsObject)
  })
      .then(getChats)

}

export const getChats = () => {
    return fetch('http://localhost:8088/chats', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedChats => {
            // console.table(parsedChats);
            chats = parsedChats.slice()
        })

    }

export const saveChat = chat => {
    fetch('http://localhost:8088/chats', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(getChats)
}