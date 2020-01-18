// created by Adrian

export const FriendCard = friends => {
  return `
    <section class="friendCard">
    <div class="friendCardName">Friend : ${friends.user.userName} </div>
      
      <br>
      <button id="deleteFriend--${friends.id}" class="deleteFriendButton">Delete Friend</button>
   
      </section>
  `;
};



