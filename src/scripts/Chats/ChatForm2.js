export const ChatFormComponent = () => {


    eventHub.addEventListener("click", clickEvent => {
  
      if (clickEvent.target.id === "addBtnChatFriend") {
  
        const chats = useChats();
        const userName = document.querySelector("chatFriendCardName2").value;
        
  
        
  
          const contentTarget = document.querySelector(".friends");
          const friendToAddId =userName
  
          /// Populate the friends object  
          const createNewFriendJoin = {
  
            userId: friendToAddId,
            initiatorId: parseInt(activeUserInitiatorId)
  
          }
  
  
          saveFriend(createNewFriendJoin).then(
            () => {
              /// Important to get the latest friends to do the render here.  Without it there is a lag in application state
              /// or the friends listed will be one transaction behind
              const afterSaveFriends = useFriends()
              const reallyUpdatedFriendAfterSave = afterSaveFriends.filter(FriendRel => parseInt(activeUserInitiatorId) === parseInt(FriendRel.initiatorId))
              const message = new CustomEvent("newFriendJoinCreated")
  
              eventHub.dispatchEvent(message)
              render(reallyUpdatedFriendAfterSave)
            }
          )
  
        }
      }
    }
  
    )