












eventHub.addEventListener("click", clickEvent => {

  
        if (clickEvent.target.id.startsWith("addFriend--")) {
      const users = useUsers();

      const userName = document.querySelector("#friend-added").value;
      const foundUser = users.find(user => user.userName === userName);

      
      const contentTarget = document.querySelector(".friends");
      const friendToAddId = event.detail.friendId

    
    //   userid: parseInt(document.querySelector("#note-id").value, 10)
      /// Populate the friends object  
      const createNewFriendJoin = {

        userId: friendToAddId,
        initiatorId: parseInt(activeUserInitiatorId)

      }
      


      } else 