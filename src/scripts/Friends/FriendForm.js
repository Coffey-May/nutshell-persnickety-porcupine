// Form render HTML created by Adrian

// Logic Author: Eli Tamez cohort 37
// Purpose of Module :


import { useFriends, saveFriend, getFriends } from "./FriendProvider.js"
import { useUsers, saveUser } from "../Users/UserProvider.js"
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends');




let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))


export const FriendFormComponent = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveBtnFriend") {
      // console.log(clickEvent.target.id)

      // Make a new object representation of a friend    
      const allFriendsArray = useFriends()
      // console.log(allFriendsArray)
      const allUsersArray = useUsers()
      // console.log(allUsersArray)



      //This code creates the new friend object in the JSON file
      // const friendToAddId = foundUser.id

      const createNewFriendJoin = {
        // Key/value pairs here

        // friend: document.querySelector("#friend-added").value

        /// need to set friends.initiatorId === activeUserId aka users.id from the Users object
        /// need to set friends.userId === users.id  


      }

    }

  })


  eventHub.addEventListener("click", clickEvent => {


    if (clickEvent.target.id === "saveBtnFriend") {

      const users = useUsers();
      // console.log(users);

      const userName = document.querySelector("#friend-added").value;
      const foundUser = users.find(user => user.userName === userName);

      if (foundUser === undefined) {
        alert("User not in system. Try new spelling");

      } else {
        // sessionStorage.setItem("activeUser", foundUser.id);
        const contentTarget = document.querySelector(".friends");

        const friendToAddId = foundUser.id

        const createNewFriendJoin = {
          // Key/value pairs here

          // friend: document.querySelector("#friend-added").value
          /// joe@nss.com is user.id 5, eli@nss.com is user.id 3
          /// need to set friends.initiatorId === activeUserId aka users.id from the Users object
          /// need to set friends.userId === users.id  
          userId: friendToAddId,
          initiatorId: 3


        }


        saveFriend(createNewFriendJoin).then(
          () => {

            const afterSaveFriends = useFriends()
            // const reallyUpdatedFriendAfterSave

            const reallyUpdatedFriendAfterSave = afterSaveFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
            const message = new CustomEvent("newFriendJoinCreated")
            // console.log(`newFriend Component Here!!!`)
            eventHub.dispatchEvent(message)
            render(reallyUpdatedFriendAfterSave)
          }
        )

      }
    }
  }

  )


  // const FriendFormComponent = () => {

  const render = () => {
    contentTarget.innerHTML = `
        
        <div>
        <h2>FRIENDS</h2>
        <form action="">
        <button class="addBtnFriend" type="button">Add Friend</button>
        <input type="text" id="friend-added">
        
        </form>
        <button id="saveBtnFriend" type="button">Save Friend</button>
        </div>

  `
  }

  render()

}


// export default FriendFormComponent



