import { useChats } from "./ChatProvider";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".chat")


const ChatListComponent = () => {

  eventHub.addEventListener("ChatHasBeenEdited", event => {
      const updatedChat = useChats()
      render(updatedChat)
  })

  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("editChat--")) {
          const [deletePrefix, noteId] = clickEvent.target.id.split("--")

          const editEvent = new CustomEvent("editButtonClicked", {
              detail: {
                  chatId: chatId
              }
          })

          eventHub.dispatchEvent(editEvent)
      }
  })

  const renderChatAgain = () => {
      const allTheChat = useChat()
      render(allTheChat)

  }

  eventHub.addEventListener("chatCreated", event => {
      renderChatAgain()
  })


  const render = (chatCollection) => {
      contentTarget.innerHTML = chatCollection.map(
          (individualChat) => {
              return `
                  <section class="Chat">
                      <div>${individualChat.userName}</div>
                      <div>${individualChat.chatText}</div>
                      <div>
                          ${new Date(individualChat.date).toLocaleDateString("us-en")}
                          ${new Date(individualChat.date).toLocaleTimeString("us-en")}
                      </div>
                      <button id="deleteChat--${individualChat.id}">Delete</button>
                      <button id="editChat--${individualChat.id}">Edit</button>
                  </section>
              `
          }
      ).join("")
  }

}

export default ChatListComponent