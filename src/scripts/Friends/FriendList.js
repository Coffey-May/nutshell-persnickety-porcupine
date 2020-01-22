// Author: Eli Tamez cohort 37
// Purpose of Module : This module represents the application state change when a new friend
// relationship is initiatied by 1) adding a friend by doing a friend text search by name and
// chosing to add the friend
// or 2) by clickAdding a friend from the Chats using the click user name and add feature
// Users are the same as friends so we use Users and filter them based on the friends join object in
// the database.json file with a fetch expand

import { useFriends, deleteFriend } from "./FriendProvider.js"
import { useUsers } from "../Users/UserProvider.js"
import { FriendCard } from "./Friend.js"
import { FriendFormComponent } from "./FriendForm.js"
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".friends_list")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addBtnFriend") {
    return FriendFormComponent()
  }
})


export const FriendList = () => {

    
    /// get the join objects in the json file called Friends for the logic using fetch with expand
    /// from the FriendProvider.js
    /// On 1-17-20 Audry said its better to make the userID in the json join = the friends .id and to set up another Id as the 
    ///initiatorId of the activeUser to help with the fetch calls and minimize the filters etc 
    // The initiator is the activeUser that is logged in 
    /// 
    /// "friends":[ 
    ///     { 
    ///     "id":1,
    ///     "userId":2,             <===== Make this equal to the users.id of the users object
    ///     "initiatorId":1         <===== Make this the ActiveUser aka the logged in user 
    ///     },
  
  

    const allFriends = useFriends()
 
    let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))

    // console.log(`activeUserInitiatorId = ${activeUserInitiatorId}`)

    // This filter pulls ONLY the friends that match the activeUser 
    const activeUserFriendsAtLogin = allFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))

 
    eventHub.addEventListener("click", clickEvent => {

        if (clickEvent.target.id.startsWith("deleteFriend--")) {
  
            const [deletePrefix, userId] = (clickEvent.target.id.split("--"))
            const parsedUserId = parseInt(userId)
         
            const allFriendsBeforeDelete = useFriends()
            
            const deletableFriends = allFriendsBeforeDelete.filter(haveUserIdMarkedForDel => parseInt(haveUserIdMarkedForDel.userId) === parsedUserId)
            
            const deletableFriendObject = deletableFriends.filter(delId => delId.initiatorId === parseInt(activeUserInitiatorId))
          
            const deletableFriendId = deletableFriendObject.find(delIt => delIt.userId === parsedUserId && delIt.initiatorId === parseInt(activeUserInitiatorId))
       
            const deleteId = deletableFriendId.id
    

            deleteFriend(deleteId).then(
                () => {

                    /// Important to get the latest friends to do the render here.  Without it there is a lag in application state
                   /// or the friends listed will be one transaction behind
                    const afterDeleteFriends = useFriends()
                    const reallyUpdatedFriendAfterDelete = afterDeleteFriends .filter(FriendRel =>  parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
                    render(reallyUpdatedFriendAfterDelete)
                }
            )
        }
    }) 

 
    
    const renderFriendsAgain = () => {

        /// Important to get the latest friends to do the render here.  Without it there is a lag in application state
       /// or the friends listed will be one transaction behind
        const nowFriends = useFriends()                                         // active seesion User   === initiatorId in friends object
        const activeUserFriendsUpdated = nowFriends.filter(FriendRel =>  parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
        const allFriends = activeUserFriendsUpdated
     
        render(activeUserFriendsUpdated)
        
    }




    eventHub.addEventListener("newFriendJoinCreated", event => {
        const nowFriends =useFriends()
      renderFriendsAgain()

    })


    //This comes from FriendForm.js line 142
    eventHub.addEventListener("newFriendJoinCreated2", clickEvent => {
   const nowFriends =useFriends()
        renderFriendsAgain()
        console.log(nowFriends)
      })


    const render = (friends) => 
    {
        contentTarget.innerHTML = `
        <br>
              <div>
                <div>
                <h2>  </h2>
                </div>
            <br>
                <section class="friend__lineItem">     
                
                        <div class="friend__item">

                            ${
            friends.map(friendObject => {
                const userHTML = FriendCard(friendObject)
               
                return userHTML
            }).join("")

            }
                        </div>
                </section>
            </div>  
            <br>
            <br>
            <br>
            <br>

   `
    }

    render(activeUserFriendsAtLogin)
  

}







