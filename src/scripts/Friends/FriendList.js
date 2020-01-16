// 
// Author: Eli Tamez cohort 37
// Purpose of Module : This module represents the application state change when new friend
// relationships are initiatied by 1) adding by doing a friend text search by name and add
// or 2) by clickAdding a friend from the Chats using the click user name and add feature


import { useFriends } from "./FriendProvider.js"
// import FriendComponent from "./Friend.js"
const eventHub = document.querySelector("container");
const contentTarget = document.querySelector("friendsList")

const FriendList = () =>   {


    const appStateFriends = useFriends()

    // Add the eventHub lister
    eventHub.addEventListener("activeUserLoggedIn", event => {
        render([])
    })

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