
// import{ saveFriend} from "./FriendProvider.js"


const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends')

export const FriendFormComponent = () => {


  eventHub.addEventListener("click", clickEvent => {
        
    if (clickEvent.target.id === "saveBtnFriend") {
        // Get what user entered
        
        const newFriend = document.querySelector(".friendName").value
        


        const newFriendObject = {
            "id": Math.floor(Math.random() * 1000) + 4,
            "event": newFriend
            // "eventDate" newEventDate,
            // "location" newEventLocation
        }

        // Change the app state
        saveFriend(newFriendObject)

        // Dispatch a custom event that state was changed
        const message = new CustomEvent("friendStateChanged")
        eventHub.dispatchEvent(message)
    }
})


const render = () => {
  contentTarget.innerHTML =   
`
<div>
<h2>FRIENDS</h2>
<form action="">
<button class="addBtnFriend">Add Friend</button>
<input type="text">
</form>
<button id="saveBtnFriend">Save Friend</button>
</div>
`
}
render()
}
