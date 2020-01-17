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

    // const friendItem = Friend()

    // get the join objects in teh json file called Friends to do the filter
    // from the FriendProvider.js
    const appFriends = useFriends()

    // get the user aka friends from the UserProvider.js to filter only friends
    // that the current user has joined as friends
    const appStateFriends = useUsers()



    eventHub.addEventListener("click", clickEvent => {

        // const theJournals = useJournals()
        const myFriends = useFriends()
        const matchingUsers = useUsers()
       
        if (clickEvent.target.id === "saveBtnFriend") {

            // This filter pulls all the friend joins from the database
            const allNutshellFriends = myFriends.filter(theJoin => matchingUsers.id === theJoin.joinId)
            
            const type = productTypes.find(type => type.id === product.productTypeId)
            
            // const allNutshellFriends = myFriends.find(theJoin => matchingUsers.id === theJoin.joinId)
            // const journalMood = theJournals.filter(theMood => mood === theMood.mood)

            const activeUser = 4
            // This filter pulls ONLY the friends that match the activeUsers .id
            // const allMyFriends = myFriends.filter(onlyMine => activeUser === onlyMine.joinId)
            // const myFriends = myFriends.filter(onlyMine => activeUser === onlyMine.joinId)
            render(allNutshellFriends)
            // render(myFriends)
           
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
     
              <div>
                <div>
                <h2> My Nutty Friends </h2>
                </div>
            
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
    };

    render(myFriends)

}

export default FriendList





