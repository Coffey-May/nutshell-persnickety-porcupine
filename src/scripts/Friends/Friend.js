// created by Adrian
import { useFriends, saveFriend, deleteFriend } from "./FriendProvider.js"
import { useUsers, saveUser } from "../Users/UserProvider.js"

// const eventHub = document.querySelector('.container');

// const allFriends = useFriends()
// console.log(useFriends)
// console.log(allFriends)



// eventHub.addEventListener("click", clickEvent => {

//   // eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("deleteFriend--")) {
     
     
//       // parseInt(FriendRel.initiatorId)
//      console.log(allFriends)
//       const [deletePrefix, userId] = (clickEvent.target.id.split("--"))
//       // console.log(clickEvent.target.id)

//       // console.log(clickEvent.target.id.split("--"))

//       const parsedUserId = parseInt(userId)

//    console.log(parsedUserId)

//    const activeUserInitiatorId = 7

// /// Need to find the id of of the object in friends array where 
// /// ( 6 is the userId && initiatorId is the activeUserId)
// /// this prevents us from deleting a join relationship in friends array of 
// /// another user who is friends with user with id 6
// // const activeUserFriends =  allFriends.filter(FriendRel => activeUserInitiatorId === parseInt(FriendRel.initiatorId))

// // console.log(activeUserFriends)




// const deletableFriends = allFriends.filter(haveUserIdMarkedForDel => parseInt(haveUserIdMarkedForDel.userId) === 6 )

// console.log(deletableFriends)

// const deletableFriendId = deletableFriends.filter(delId => delId.initiatorId === activeUserInitiatorId) 

// // const customerRelationships = empCust.filter(ec => ec.employeeId === employee.id)

//       // console.log(friends.userId)
//       deleteFriend(deletableFriendId).then(
//           () => {

//               const theUpdatedFriends = useFriends()
//               render(theUpdatedFriends)
//           }
//       )
//   }
// })

export const FriendCard = friends => {
  return `
    <section class="friendCard">
    <div class="friendCardName">Friend : ${friends.user.userName} </div>
      
      <br>
      <button id="deleteFriend--${friends.userId}" type="button" class="deleteFriendButton">Delete Friend</button>
   
      </section>
  `;
};



