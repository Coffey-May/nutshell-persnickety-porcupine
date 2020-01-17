// created by Adrian

export const FriendCard = friend => {
  return `
    <section class="friendCard">
      <div class="friendCrdName">${friend.friendName}</div>
      <button id="deleteFriend--${friend.id}" class="deleteFriendButton">Delete Friend</button>
    </section>
  `;
};
