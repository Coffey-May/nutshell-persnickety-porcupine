// 
// Author: Eli Tamez cohort 37
// Purpose of Module : This module represents the application state change when a new friend
// relationship is initiatied by 1) adding a friend by doing a friend text search by name and
// chosing to add the friend
// or 2) by clickAdding a friend from the Chats using the click user name and add feature
// User are the same as friends so we use Users and filter them based on the friends join 
// the database.json file


import { useFriends } from "./FriendProvider.js"
import { useUsers } from "../Users/UserProvider.js"
// import FriendComponent from "./Friend.js"
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".friendsList")

const FriendList = () =>   {

    // get the join objects to do the filter from the FriendProvider.js
    const appFriends = useFriends()

    // get the user aka friends from the UserProvider.js to filter only friends
    const appStateFriends = useUsers()
    // const appStateFriends = useFriends()


//// TESTING THIS AS THE FILTER
    // const journalMood = theJournals.filter(theMood => mood === theMood.mood)

   
    // render(journalMood)
//// TESTING THIS AS THE FILTER

    // Add the eventHub lister
    // eventHub.addEventListener("activeUserLoggedIn", event => {
    //     render([])
    // })

//  Put code here to filter the friends based on the join table "friends"
// where the userId = user.id                    and friendName === userEmail

// {
    // "users": [
    //   {
    //     "id": 1,
    //     "userName": "adi@nss.com",
    //     "userEmail": "adi@nss.com",
    //     "userPassword": "1234"
    //   },
    //   {
    //     "id": 2,
    //     "userName": "cof@nss.com",
    //     "userEmail": "cof@nss.com",
    //     "userPassword": "1234"
    //   }
    // ],
    // "friends": [
    //   {
    //     "id": 1,
    //     "friendName": "coffee@nss.com",
    //     "userId": "2"
    //   }




    const render = friends => {
        contentTarget.innerHTML = `
        <div>
            <div>
            <h2> Nutshell Friends </h2>
            </div>
        <section class="friendComponent">     
        
        <div class="friend">
                ${
            friends.map(friendObject => {
                const userHTML = Friend(friendObject)
                return userHTML
            }).join("")
            }
        </div>
        </section>
        </div>
     `

    };

    render(appStateFriends)

}

export default FriendList