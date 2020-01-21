// created by Adrian
/// further changes by Eli Tamez
/// This component grabs user details from the friends join because I used a fetch with 
// return fetch('http://localhost:8088/friends?_expand=user', 
// which lets you drill down to user off of the friends with friends.user.userName

export const FriendCard = friends => {
  console.log(friends)
  return `
    <section class="friendCard">
    <div class="friendCardName">Friend : ${friends.user.userName} </div>
      
      <br>
      <button id="deleteFriend--${friends.userId}" type="button" class="deleteFriendButton">Delete Friend</button>
   
      </section>
      <br>
      <br>
      
    

  `;
};



