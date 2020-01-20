// initial code by Adrian

let chats = []

export const useChat = () => chats.slice()

export const editChat = (chatsObject) => {
  return fetch(`http://localhost:8088/chat/${chatsObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(chatsObject)
  })
      .then(getChat)

}

export const getChat = () => {
    return fetch('http://localhost:8088/chat', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedChats => {
            // console.table(parsedChats);
            chats = parsedChats.slice()
        })

    }

export const saveChat = chat => {
    fetch('http://localhost:8088/chat', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    }).then(res => res.json())
    .then(getChat)
}