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
  .then(TaskList)
 
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




