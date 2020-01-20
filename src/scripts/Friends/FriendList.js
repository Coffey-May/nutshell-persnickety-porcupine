// 
// Author: Eli Tamez cohort 37
// Purpose of Module : This module represents the application state change when a new friend
// relationship is initiatied by 1) adding a friend by doing a friend text search by name and
// chosing to add the friend
// or 2) by clickAdding a friend from the Chats using the click user name and add feature
// Users are the same as friends so we use Users and filter them based on the friends join 
// the database.json file


import { useFriends, deleteFriend } from "./FriendProvider.js"
import { useUsers } from "../Users/UserProvider.js"

import { FriendCard } from "./Friend.js"
// import { Friend } from "./Friend.js"

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".friends_list")

export const FriendList = () => {

    
    /// get the join objects in the json file called Friends to do the filter
    /// from the FriendProvider.js
    /// On 1-17-20 Audry said its better to make the userID in the json join = the friends .id and to set up another Id as the 
    ///initiatorId of the AvtiveUser to help with the fetch calls and minimize the filters etc 
    // The initiator is the activeUser that is logged in to use the Nutshell site
    /// 
    /// "friends":[ 
    ///     { 
    ///     "id":1,
    ///     "userId":2,             <===== Make this equal to the users.id of the users object
    ///     "initiatorId":1         <===== Make this the ActiveUser aka the logged in user 
    ///     },


     const loginUpdatedFriends = useFriends()
    // render(loginUpdatedFriends)
    const allFriends = useFriends()
    // render(allFriends)
    console.log(allFriends)

 
    ///Audry said to make the userID as the friends ID and to set up another iD as the 
    ///initiatorId which helps with the fetch
    ///so we can get all the details out of the filters etc to eliminate steps.
    ///


    /// Hard coded the ActiveUser id here.  Need to get from session object upon login

    /// Testing with Sue id 7 as the active user
    // const activeUserInitiatorId = null
    let activeUserInitiatorId = parseInt(sessionStorage.getItem('activeUser'))

    // const activeUserInitiatorId = 3
    // const activeUserInitiatorId = activeUser

    console.log(`activeUserInitiatorId = ${activeUserInitiatorId}`)

    // This filter pulls ONLY the friends that match the activeUser 
    const activeUserFriendsAtLogin = allFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))

    // console.log(activeUserFriendsAtLogin)

    // render(activeUserFriendsAtLogin)


    eventHub.addEventListener("click", clickEvent => {

        // eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteFriend--")) {

           
            const [deletePrefix, userId] = (clickEvent.target.id.split("--"))
            // console.log(clickEvent.target.id.split("--"))

            const parsedUserId = parseInt(userId)
            console.log(parsedUserId)

            const allFriendsBeforeDelete = useFriends()
            
            const deletableFriends = allFriendsBeforeDelete.filter(haveUserIdMarkedForDel => parseInt(haveUserIdMarkedForDel.userId) === parsedUserId)
            console.log(deletableFriends)

            const deletableFriendObject = deletableFriends.filter(delId => delId.initiatorId === parseInt(activeUserInitiatorId))
            console.log(deletableFriendObject)

            // const deletableXFactor = deletableFriends.filter(delIt => delIt.userId === parsedUserId && delIt.initiatorId === parseInt(activeUserInitiatorId))
            // console.log(deletableXFactor)

            // const deletableXFactor1 = deletableFriends.filter(delIt => delIt.userId === parsedUserId && delIt.initiatorId === parseInt(activeUserInitiatorId))
            // console.log(deletableXFactor)
            //userId of the friend === the ID of the clicked friend for DELETE
            
            // const deletableFriendId = deletableFriendObject.find(delIt => delIt.userId === parsedUserId && delIt.initiatorId === activeUserInitiatorId)
            const deletableFriendId = deletableFriendObject.find(delIt => delIt.userId === parsedUserId && delIt.initiatorId === parseInt(activeUserInitiatorId))
            console.log(deletableFriendId)
            // const deleteId = deletableFriendId.userId
            const deleteId2 = deletableFriendId.id
            console.log(deleteId2)


         
            deleteFriend(deleteId2).then(
                () => {
                    // const allFriendsPreDelete = useFriends()
                    // const activeUserFriendsBeforeDelete = allFriendsPreDelete.filter(FriendRel => activeUserInitiatorId === parseInt(FriendRel.initiatorId))
                    // console.log(activeUserFriendsBeforeDelete)
                    // const theUpdatedFriends = activeUserFriendsBeforeDelete
                    // render(theUpdatedFriends)

                    const afterDeleteFriends = useFriends()
                    const reallyUpdatedFriendAfterDelete = afterDeleteFriends .filter(FriendRel =>  parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
                    // const message = new CustomEvent("newFriendJoinCreated")
                    // console.log(`newFriend Component Here!!!`)
                    // eventHub.dispatchEvent(message)
                    //  FriendFormComponent()
                    render(reallyUpdatedFriendAfterDelete)

        
                }
            )
        }
    }) 

    
    
    const renderFriendsAgain = () => {
        const nowFriends = useFriends()
        const activeUserFriendsUpdated = nowFriends.filter(FriendRel =>  parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
        const allFriends = activeUserFriendsUpdated
        console.log(activeUserFriendsUpdated)
        render(activeUserFriendsUpdated)
        
    }
    
    eventHub.addEventListener("newFriendJoinCreated", event => {
      renderFriendsAgain()
    
    })





    // renderFriendsAgain()

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


   `
    }

    render(activeUserFriendsAtLogin)
  

}

// export default FriendList





