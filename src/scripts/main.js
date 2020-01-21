import { userFormComponent, LogInForm, RegisterNewAccountForm, RegisterNewAccount } from "./Users/UserForm.js";
import {taskFormComponent} from "./Tasks/TaskForm.js";
import {EventFormComponent} from "./Events/EventForm.js";
import {ArticleFormComponent} from "./Articles/ArticleForm.js";
import {ChatFormComponent} from "./Chats/ChatForm.js"
import {FriendList} from "./Friends/FriendList.js"
import { getFriends } from "./Friends/FriendProvider.js"
import { getUsers } from "./Users/UserProvider.js"
import {ArticleList} from "./Articles/ArticleList.js"
import { EventList } from "./Events/EventList.js";
import { TaskList } from "./Tasks/TaskList.js";
import ChatListComponent from "./Chats/ChatList.js";
import { getChat } from "./Chats/ChatProvider.js";

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
  .then(getFriends)
  .then(TaskList)
  .then(getChat)
  .then(ChatFormComponent)
  .then(ChatListComponent)
  // .then(AddFriendComponent)
  // .then(getFriends)
  .then(FriendList)
  // .then(FriendFormComponent)
  
  
}

if (sessionStorage.hasOwnProperty("activeUser")) {

  NutShellDashBoard()
  document.querySelector(".hidden").classList.remove("hidden")
}else { 
  LogInLoad()
}
eventHub.addEventListener("userLoggedIn", event => {
   NutShellDashBoard()
   document.querySelector(".hidden").classList.remove("hidden")

})
eventHub.addEventListener("newUserRegistered", event => {
  NutShellDashBoard()
  document.querySelector(".hidden").classList.remove("hidden")
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "NoReallyGtfoButton") {
  sessionStorage.removeItem("activeUser")
  return LogInLoad()
}
})



