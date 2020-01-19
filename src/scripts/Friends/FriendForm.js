import { useFriends, saveFriend } from "./FriendProvider.js"
import { useUsers, saveUser } from "../Users/UserProvider.js"
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends');


const FriendFormComponent = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveBtnFriend") {
      console.log(clickEvent.target.id)
      // Make a new object representation of a friend    
      const allFriendsArray = useFriends()
      console.log(allFriendsArray)
      const allUsersArray = useUsers()
      console.log(allUsersArray)

      const createNewFriend = {
        // Key/value pairs here
     
        // friend: document.querySelector("#friend-added").value
        /// hard coded to test 
        userId: 2,
        initiatorId: 7
      }

      saveFriend(createNewFriend)

      
      // .then(
      //   () => {
      //     const message = new CustomEvent("newFriendCreated")
      //     // console.log(`newFriend Component Here!!!`)
      //     eventHub.dispatchEvent(message)

      //   }
      // )
     
    }

    
  })






  
  // const FriendFormComponent = () => {

  const render = () => {
    contentTarget.innerHTML = `
        
        <div>
        <h2>FRIENDS</h2>
        <form action="">
        <button class="addBtnFriend">Add Friend</button>
        <input type="text" id="friend-added">
        
        </form>
        <button id="saveBtnFriend" type="button">Save Friend</button>
        </div>

  `
  }

  render()

}

export default FriendFormComponent



// "friends":[ 
//   { 
//         "id": 1,
//         "userId": 2,
// "initiatorId":7

// },


// <label for="note-criminal" ><div id="suspect__name">Suspect Name</div></label>

//                 <input type="text" id="note-criminal" required minlength="10" maxlength="50" size="30"> 




// `
// <div>
// <h2>FRIENDS</h2>
// <form action="">
// <button class="addBtnFriend">Add Friend</button>
// <input type="text" id="friend-added">
// </form>
// <button class="saveBtnFriend">Save Friend</button>
// </div>

//   `