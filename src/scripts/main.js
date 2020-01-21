import { userFormComponent, LogInForm, RegisterNewAccountForm, RegisterNewAccount } from "./Users/UserForm.js";
import {taskFormComponent} from "./Tasks/TaskForm.js";
import {EventFormComponent} from "./Events/EventForm.js";
import {ArticleFormComponent} from "./Articles/ArticleForm.js";
import {ChatFormComponent} from "./Chats/ChatForm.js"
// import {FriendFormComponent,} from "./Friends/FriendForm.js";
import {FriendList} from "./Friends/FriendList.js"
// import FriendList from "./Friends/FriendList2.js"
import { getFriends } from "./Friends/FriendProvider.js"
import { getUsers } from "./Users/UserProvider.js"
import {ArticleList} from "./Articles/ArticleList.js"
import { EventList } from "./Events/EventList.js";
import { ChatComponent } from "./Chats/Chat.js";
import ChatListComponent from "./Chats/ChatList.js";
// import { useFriends } from "./Friends/FriendProvider.js"
// import { useFriends } from "./FriendProvider.js"
// import { useUsers } from "../Users/UserProvider.js"

const eventHub = document.querySelector(".container");

const LogInLoad = () => {
  return getUsers()
  .then(LogInForm)
  .then(RegisterNewAccountForm)
  .then(RegisterNewAccount)
  .then(userFormComponent)
}

export const NutShellDashBoard = () => {
  return getUsers()
  
  .then(taskFormComponent)
  .then(ArticleList)
  .then(EventList)
  .then(ChatFormComponent)
  .then(ChatListComponent)
  // .then(AddFriendComponent)
  .then(getFriends)
  .then(FriendList)
  // .then(FriendFormComponent)
  
  
}

if (sessionStorage.hasOwnProperty("activeUser")) {
  NutShellDashBoard()
}else { 
  LogInLoad()
}
eventHub.addEventListener("userLoggedIn", event => {
  return NutShellDashBoard()
})
eventHub.addEventListener("newUserRegistered", event => {
  return NutShellDashBoard()
})




