// initial code by Adrian

let chat = []
const setChat = (chatArray) => {
    chat = chatArray.slice()
}

export const useChat = () => chat.slice()

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
    return fetch("http://localhost:8088/chat")
        .then(response => response.json())
        .then((chatArray) => {
            chat = chatArray.slice()
        })

    }

export const saveChat = chat => {
 return fetch('http://localhost:8088/chat', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    }).then(res => res.json())
    .then(getChat)
}