import { useChat } from "./ChatProvider.js";
import { useUsers } from "../Users/UserProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".chatList")


const ChatListComponent = () => {
        const chats = useChat()
        const users = useUsers()

  eventHub.addEventListener("ChatHasBeenEdited", event => {
      const updatedChat = useChat()
      render(updatedChat)
  })

  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("editChat--")) {
          const [deletePrefix, chatId] = clickEvent.target.id.split("--")

          const editChat = new CustomEvent("editButtonClicked", {
              detail: {
                  chatId: chatId
              }
          })

          eventHub.dispatchEvent(editChat)
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
      const userId =
      contentTarget.innerHTML = chatCollection.map(
          (individualChat) => {
            if (parseInt(sessionStorage.getItem("activeUser")) === individualChat.userId) {
            return `
                <section class="Chat">
                    <div>${individualChat.user.userName}</div>
                    <div>${individualChat.chatText}</div>
                    <div>
                        ${new Date(individualChat.date).toLocaleDateString("us-en")}
                        ${new Date(individualChat.date).toLocaleTimeString("us-en")}
                    </div>
                    <button id="editChat--${individualChat.id}">Edit</button>
                    </section>`
            } else {
            return `
                <section class="Chat">
                    <div>${individualChat.user.userName}</div>
                    <div>${individualChat.chatText}</div>
                    <div>
                        ${new Date(individualChat.date).toLocaleDateString("us-en")}
                        ${new Date(individualChat.date).toLocaleTimeString("us-en")}
                    </div>
                    </section>`

            }   
          }
      ).join("")
  }
render(chats)
}

export default ChatListComponent