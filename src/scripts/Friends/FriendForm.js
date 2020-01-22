// Form render HTML created by Adrian

// Logic Author: Eli Tamez cohort 37
// Purpose of Module : to allow the logged in user to add friends to his group of friends by typing their userName
// which is an email account.  They system validates if the useName is a current site member and if not notifies
// the user to try again


import { useFriends, saveFriend, getFriends } from "./FriendProvider.js"
import { useUsers, saveUser } from "../Users/UserProvider.js"
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friendDiv');

// This sets the User to the session activeUser
let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))


export const FriendFormComponent = () => {


  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveBtnFriend") {

      const users = useUsers();

      const userName = document.querySelector("#friend-added").value;
      const foundUser = users.find(user => user.userName === userName);

      if (foundUser === undefined) {

        // alert("User not in system. Try new spelling");

        const contentTarget = document.querySelector(".friendSaveAlert");

        const renderAlert = () => {

          contentTarget.innerHTML = `
      
        <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Oops!</strong> User name not found. Try another spelling!
        </div>

          `
          // <strong>Oops!</strong> User name not found. Try another spelling!
          // <strong>Oops!</strong> Please register a new Account!
          // <strong>Oops!</strong> Please fill out all Fields!
          // <strong>Oops!</strong> Passwords Don't Match!



          var close = document.getElementsByClassName("closebtn");
          var i;

          // Loop through all close buttons
          for (i = 0; i < close.length; i++) {
            // When someone clicks on a close button
            close[i].onclick = function () {

              // Get the parent of <span class="closebtn"> (<div class="alert">)
              var div = this.parentElement;

              // Set the opacity of div to 0 (transparent)
              div.style.opacity = "0";

              // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
              setTimeout(function () { div.style.display = "none"; }, 900);
            }
          }


        }

        renderAlert()

        /// Alert for Register New Account      alert("Please register a new Account");
        /// Alert for Register New Account   alert("Please fill out all Fields");
        /// Alert for Register New Account         window.alert("Passwords Don't Match")


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




  eventHub.addEventListener("addFriendNameClicked", clickEvent => {


      const afterSaveFriends = useFriends()
      const reallyUpdatedFriendAfterSave = afterSaveFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))


      const message = new CustomEvent("newFriendJoinCreated2")
      const friendToBeAdded = event.detail.friendId



      /// Populate the friends object  
      const createNewFriendJoin2 = {

        userId: parseInt(friendToBeAdded),
        initiatorId: parseInt(activeUserInitiatorId)

      }


      saveFriend(createNewFriendJoin2).then(
        () => {
          /// Important to get the latest friends to do the render here.  Without it there is a lag in application state
          /// or the friends listed will be one transaction behind
          const afterSaveFriends = useFriends()
          const reallyUpdatedFriendAfterSave = afterSaveFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
          const message = new CustomEvent("newFriendJoinCreated2")

          // console.log(reallyUpdatedFriendAfterSave)
          eventHub.dispatchEvent(message)
          render(reallyUpdatedFriendAfterSave)
        }
      )

    })
 





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

