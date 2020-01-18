// 
// Author: Eli Tamez cohort 37
// Purpose of Module : This module represents the application state change when a new friend
// relationship is initiatied by 1) adding a friend by doing a friend text search by name and
// chosing to add the friend
// or 2) by clickAdding a friend from the Chats using the click user name and add feature
// Users are the same as friends so we use Users and filter them based on the friends join 
// the database.json file


import { useFriends } from "./FriendProvider.js"
import { useUsers } from "../Users/UserProvider.js"

import { FriendCard } from "./Friend.js"
// import { Friend } from "./Friend.js"

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".friendsList")

const FriendList = () => {

   

    /// get the join objects in the json file called Friends to do the filter
    /// from the FriendProvider.js
   /// On 1-17-20 Audry said its better to make the userID in teh json join = the friends .id and to set up another Id as the 
   ///initiatorId of the AvtiveUser to help with the fetch calls and minimize the filters etc 
    // The initiator is the activeUser that is logged in to use the Nutshell site
    /// 
    /// "friends":[ 
    ///     { 
    ///     "id":1,
    ///     "userId":2,             <===== Make this equal to the users.id of the users object
    ///     "initiatorId":1         <===== Make this the ActiveUser aka the logged in user 
    ///     },



    // const appFriends = useFriends()
    const joinedFriends = useFriends()
    const appStateFriends = useUsers()

    const allFriends = useFriends()
    // console.log(allFriends)

    const matchingUsers = useUsers()
    // console.log(matchingUsers)

    ///Audry said to make the userID as the friends ID and to set up another iD as the 
   ///initiatorId which helps with the fetch
    ///so we can get all the details out of the filters etc to eliminate steps.
    ///


        /// Hard coded the ActiveUser id here.  Need to get from session object upon login
    /// Testing with Sue id 7 as the active user
    
    const activeUserInitiatorId = 7
    console.log(`activeUserInitiatorId = ${activeUserInitiatorId}`)

    // This filter pulls ONLY the friends that match the activeUser 
    const activeUserFriends =  allFriends.filter(FriendRel => activeUserInitiatorId === parseInt(FriendRel.initiatorId))
    // console.log(activeUserFriends)
 

   
    eventHub.addEventListener("click", clickEvent => {
       
        if (clickEvent.target.id === "saveBtnFriend") {

                
            
            console.log(activeUserFriends)
            // const myFriends = myFriends.filter(onlyMine => activeUser === onlyMine.joinId)
            
            // render(allNutshellFriends)
            // render(activeUserFriends)

            console.log(clickEvent.target.id)

            const addFriendEvent = new CustomEvent("saveFriendButtonClicked", {
                // detail: {

                //     friend: friend.friendName
                // }
            })
            eventHub.dispatchEvent(addFriendEvent)

        }

    })




    const render = (friends) => {
        contentTarget.innerHTML += `
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
                // console.log(`This is the User Id of the ActiveUsers friend ${friends.userId}`)
                return userHTML
            }).join("")

            }
                        </div>
                </section>
            </div>  


   `
    };

    render(activeUserFriends)

}

export default FriendList





