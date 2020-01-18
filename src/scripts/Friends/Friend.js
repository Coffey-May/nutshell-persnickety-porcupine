// created by Adrian

export const FriendCard = friends => {
  return `
    <section class="friendCard">
    
      <div class="friendCardName">This # ${friends.initiatorId} is the Join Initiator Id = .id of the ActiveUser </div>
      <br>
      <div class="friendCardName">This # ${friends.userId} is the Join UserId =.id of the friend of above Active User </div>
      <br>
      <button id="deleteFriend--${friends.id}" class="deleteFriendButton">Delete Friend</button>
    </section>
  `;
};
