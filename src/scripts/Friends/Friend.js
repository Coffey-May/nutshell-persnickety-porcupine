// created by Adrian

export const FriendCard = friends => {
  return `
    <section class="friendCard">
    <div class="friendCardName" >TEST VERSION</div>
      <div class="friendCardName">${friends.friendName}</div>
      <button id="deleteFriend--${friends.id}" class="deleteFriendButton">Delete Friend</button>
    </section>
  `;
};
