// Initial code by Adrian

export const ChatComponent = (chat) => {
  return `
      <section class="chat">
          <div class="chatUsername">${chat.userId}:</div>
          <div class="chatContent">${chat.chatText}  /${chat.chatDateTime}</div>
          <div class="chatEditButton">
            <button id="editChat--${chat.id}">Edit Chat</button>
          </div>
      </section>
  `
}