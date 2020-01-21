// Form render HTML created by Adrian

// Logic Author: Eli Tamez cohort 37
// Purpose of Module : to allow the logged in user to add friends to his group of friends by typing their userName
// which is an email account.  They system validates if the useName is a current site member and if not notifies
// the user to try again


import { useFriends, saveFriend, getFriends } from "./FriendProvider.js"
import { useUsers, saveUser } from "../Users/UserProvider.js"
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends');

// This sets the User to the session activeUser
let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))


export const FriendFormComponent = () => {


  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveBtnFriend") {

      const users = useUsers();

      const userName = document.querySelector("#friend-added").value;
      const foundUser = users.find(user => user.userName === userName);

      if (foundUser === undefined) {
        alert("User not in system. Try new spelling");

      } else {
        
        const contentTarget = document.querySelector(".friends");
        const friendToAddId = foundUser.id

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
    }
  }

  )


  const render = () => {
    contentTarget.innerHTML = `
        
    
        <div class="friendForm">
        <form action="">
            <label for="">Friend</label>
            <input class="userName type="text" id="friend-added"><br>
                        
        </form>
<br>

        <button id="saveBtnFriend">Save Friend</button>
        </div>

  `
  }

  render()

}


{/* <button class="addBtnFriend" type="button">Add Friend</button> */}



// <div>
// <h2>FRIENDS</h2>
// <form action="">

// <input type="text" id="friend-added">

// </form>
// <button id="saveBtnFriend" type="button">Save Friend</button>
// </div>