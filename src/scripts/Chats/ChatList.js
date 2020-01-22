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





eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith("addFriend--")) {
        // const confirmFriendAdd1 =  event.detail.userName

        // const friendName = clickEvent.target.userId
        // const friendName = document.querySelector("chatFriendCardName2").value
        // const friendName = clickEvent.target.querySelector("chatFriendCardName2").value
        // // "chatFriendCardName2"
{/* <button id="addFriend--1" class="task__addFriendBtn">adi@nss.com</button> */}

// console.log(friendName)
        // const userId = document.querySelector("#chat-userId").value
        
        // document.querySelector("#chat-userId").value = theFoundedChat.userId
        // console.log(theFoundedChat.userId)
       
        // const confirmFriendAddText = confirm(`Add ${event.detail.userName} as new friend???`);
        const confirmFriendAddText = confirm(`Add this friend to your list???`);
     
        if (confirmFriendAddText === true) {




            const [deletePrefix, friendId] = clickEvent.target.id.split("--")

            console.log(friendId)

            const addChatFriend = new CustomEvent("addFriendNameClicked", {
                detail: {
                    friendId: friendId
                }

            })
            eventHub.dispatchEvent(addChatFriend)


        }
    }
}

)



const render = (chatCollection) => {
    const userId =
        contentTarget.innerHTML = chatCollection.map(
            (individualChat) => {
                if (parseInt(sessionStorage.getItem("activeUser")) === individualChat.userId) {
                    return `
            
                <section class="Chat">
                <button class="chatUsername" id="#addBtnChatFriend">${individualChat.user.userName}:</button>    
                    <div class="chatFriendCardName1">${individualChat.user.userName}</div>
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
                <button id="addFriend--${individualChat.user.id}" id="task__addFriendBtn" class="task__addFriendBtn" value="task__addFriend" >${individualChat.user.userName}</button>
         
                    <div class="chatFriendCardName2" value"chatFriendCardName2"   >${individualChat.user.userName}</div>
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