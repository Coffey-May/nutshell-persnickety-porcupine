// created by Adrian

export const FriendCard = friends => {
  return `
    <section class="friendCard">
<<<<<<< HEAD
    <div class="friendCardName" >TEST VERSION</div>
      <div class="friendCardName">${friends.friendName}</div>
      <button id="deleteFriend--${friends.id}" class="deleteFriendButton">Delete Friend</button>
=======
      <div class="friendCardName">${friend.friendName}</div>
      <button id="deleteFriend--${friend.id}" class="deleteFriendButton">Delete Friend</button>
>>>>>>> master
    </section>
  `;
};
