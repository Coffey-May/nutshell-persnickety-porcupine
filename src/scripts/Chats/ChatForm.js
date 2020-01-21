import { saveChat, useChat, editChat } from "./ChatProvider.js";
import { useFriends, saveFriend, getFriends } from "../Friends/FriendProvider.js"
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.chat')

let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))


export const ChatFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const ChatToBeEdited = event.detail.chatId

        const allChatArray = useChat()

        const theFoundedChat = allChatArray.find(
            (currentChatObject) => {
                return currentChatObject.id === parseInt(ChatToBeEdited, 10)
            }
        )
        document.querySelector("#chat-id").value = theFoundedChat.id
        document.querySelector("#chat-text").value = theFoundedChat.chatText
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
                    chatText: document.querySelector("#chat-text").value,
                    userId: parseInt(document.querySelector("#chat-userId").value, 10),
                    date: Date.now()
                }

                editChat(editedChat).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("ChatHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newChat = {
                    chatText: document.querySelector("#chat-text").value,
                    userId: parseInt(sessionStorage.getItem("activeUser"), 10),
                    date: Date.now()
                }
                const message = new CustomEvent("chatCreated")
                eventHub.dispatchEvent(message)
                saveChat(newChat).then(() => eventHub.dispatchEvent(message))
                  
                  
                    
                  
            }
        }
    })




    
    eventHub.addEventListener("click", clickEvent => {
  
        if (clickEvent.target.id.startsWith("deleteNote--")) {
        // if (clickEvent.target.id === "#addBtnChatFriend") {
    
            const [deletePrefix, friendId] = clickEvent.target.id.split("--")
            console.log(friendId)
          const chats = useChat();
          const userName = document.querySelector(".chatFriendCardName2").textContent;
          
         
          
    
            const contentTarget = document.querySelector(".friends");
            const friendToAddId =friendId
    console.log(friendToAddId)
            /// Populate the friends object  
            const createNewFriendJoin = {
    
              userId: friendToAddId,
              initiatorId: parseInt(activeUserInitiatorId)
    
            }
    
    
            saveFriend(createNewFriendJoin).then(
              () => {
                /// Important to get the latest friends to do the render here.  Without it there is a lag in application state
                /// or the friends listed will be one transaction behind
                const afterSaveFriends = useFriends()
                const reallyUpdatedFriendAfterSave = afterSaveFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
                const message = new CustomEvent("newFriendJoinCreated")
    
                eventHub.dispatchEvent(message)
                render(reallyUpdatedFriendAfterSave)
              }
            )
    
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

