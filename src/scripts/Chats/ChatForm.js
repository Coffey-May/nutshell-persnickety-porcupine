import { saveChat, getChat, useChat, editChat } from "./ChatProvider.js";
import { ChatComponent } from "./Chat.js";

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.chat')

export const ChatFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.chatId

        const allChatArray = useChat()

        const theFoundedChat = allChatArray.find(
            (currentChatObject) => {
                return currentChatObject.id === parseInt(ChatToBeEdited, 10)
            }
        )
        document.querySelector("#chat-id").value = theFoundedChat.id
        document.querySelector("#chat-text").value = theFoundedChat.text
        document.querySelector("#chat-userId").value = theFoundedChat.userId
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "addMessageBtn") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#chat-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedChat = {
                    id: parseInt(document.querySelector("#chat-id").value, 10),
                    message: document.querySelector("#chat-text").value,
                    userId: parseInt(document.querySelector("#chat-userId").value, 10),
                    date: Date.now()
                }

                editChat(editedChat).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("ChatHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newChat = {
                    message: document.querySelector("#chat-text").value,
                    userId: parseInt(sessionStorage.getItem("activeUser"), 10),
                    date: Date.now()
                }
                saveChat(newChat)
            }
        }
    })
    const render = () => {
        contentTarget.innerHTML = `
        <h2>CHAT</h2>
        <div>
        <input type="hidden" id="chat-id" />
        <input type="hidden" id="chat-userId" />
                <div class="chat__field">
                    Message: <input type="text" id="chat-text" />
                </div>
                    <button id="addMessageBtn">Create New Message</button>
            </details>
        </div>
        `

    }

    render()
}

export default ChatFormComponent

