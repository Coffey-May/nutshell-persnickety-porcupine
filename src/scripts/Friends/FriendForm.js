import { useFriends, saveFriend, getFriends } from "./FriendProvider.js"
import { useUsers, saveUser } from "../Users/UserProvider.js"
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends');




  let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))


// export const AddFriendComponent = () => {
//   eventHub.addEventListener("click", clickEvent => {
//     // const password1 = document.querySelector("#password1").value;
//     // const password2 = document.querySelector("#password2").value;
//     //    compare code
//     if (clickEvent.target.id === "saveBtnFriend") {
//       // if (sessionStorage != null) {
//       //     return NutShellDashBoard()
//       // } 
//       const users = useUsers();
//       console.log(users);

//       const userName = document.querySelector("#friend-added").value;
//       const foundUser = users.find(user => user.userName === userName);
      
//       if (foundUser === undefined) {
//         alert("User not in system. Try new spelling");
      
//       } else {
//         // sessionStorage.setItem("activeUser", foundUser.id);
//         const contentTarget = document.querySelector(".friends");
//         // contentTarget.innerHTML = "";
//         // return NutShellDashBoard()
//         const friendToAddId = foundUser.id

//         const createNewFriendJoin = {
//           // Key/value pairs here

//           // friend: document.querySelector("#friend-added").value
//           /// joe@nss.com is user.id 5, eli@nss.com is user.id 3
//           /// need to set friends.initiatorId === activeUserId aka users.id from the Users object
//           /// need to set friends.userId === users.id  
//           userId: friendToAddId,
//           initiatorId: 7
//         }
//         // Change API state and application state
//         // This is the first saveFriend eventListner
//         saveFriend(createNewFriendJoin).then(
//           () => {
//             const message = new CustomEvent("newFriendJoinCreated")
//             console.log(`newFriend Component Here!!!`)
//             eventHub.dispatchEvent(message)
//             //  FriendFormComponent()
//           }
//         )

//       }
//     }
//   }

//   );
// };




export const FriendFormComponent = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveBtnFriend") {
      console.log(clickEvent.target.id)
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
        /// hard coded to test 
        /// need to set friends.initiatorId === activeUserId aka users.id from the Users object
        /// need to set friends.userId === users.id  
        // userId: friendToAddId,
        // initiatorId: 7
      }
      // Change API state and application state
      // This is the first saveFriend eventListner
      // saveFriend(createNewFriendJoin).then(
      //   () => {
      //     const message = new CustomEvent("newFriendJoinCreated")
      //     // console.log(`newFriend Component Here!!!`)
      //     eventHub.dispatchEvent(message)

      //   }
      // )

    }


  })

  // eventHub.addEventListener("click", clickEvent => {
  //   if (clickEvent.target.id === "saveBtnFriend") {
  //     const message = new CustomEvent("saveFriendButtonClicked")
  //     eventHub.dispatchEvent(message)

  //   }

  // })
  eventHub.addEventListener("click", clickEvent => {
    // const password1 = document.querySelector("#password1").value;
    // const password2 = document.querySelector("#password2").value;
    //    compare code
    if (clickEvent.target.id === "saveBtnFriend") {
      // if (sessionStorage != null) {
      //     return NutShellDashBoard()
      // } 
      const users = useUsers();
      console.log(users);

      const userName = document.querySelector("#friend-added").value;
      const foundUser = users.find(user => user.userName === userName);
      
      if (foundUser === undefined) {
        alert("User not in system. Try new spelling");
      
      } else {
        // sessionStorage.setItem("activeUser", foundUser.id);
        const contentTarget = document.querySelector(".friends");
        // contentTarget.innerHTML = "";
        // return NutShellDashBoard()
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
        // Change API state and application state
        // This is the first saveFriend eventListner
        saveFriend(createNewFriendJoin).then(
          () => {

            const afterSaveFriends = useFriends()
            // const reallyUpdatedFriendAfterSave

            const reallyUpdatedFriendAfterSave = afterSaveFriends.filter(FriendRel =>  parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
            const message = new CustomEvent("newFriendJoinCreated")
            console.log(`newFriend Component Here!!!`)
            eventHub.dispatchEvent(message)
            //  FriendFormComponent()
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



