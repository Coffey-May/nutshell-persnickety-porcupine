import { userFormComponent, LogInForm, RegisterNewAccountForm, RegisterNewAccount } from "./Users/UserForm.js";
import {taskFormComponent} from "./Tasks/TaskForm.js";
import {EventFormComponent} from "./Events/EventForm.js";
import {ArticleFormComponent} from "./Articles/ArticleForm.js";
import {ChatFormComponent} from "./Chats/ChatForm.js"
import { FriendFormComponent } from "./Friends/FriendForm.js";
import FriendList from "./Friends/FriendList.js"
// import FriendList from "./Friends/FriendList2.js"
import { getFriends } from "./Friends/FriendProvider.js"
import { getUsers } from "./Users/UserProvider.js"

// import { useFriends } from "./Friends/FriendProvider.js"
// import { useFriends } from "./FriendProvider.js"
// import { useUsers } from "../Users/UserProvider.js"


getUsers()
LogInForm()
RegisterNewAccountForm()
RegisterNewAccount()
userFormComponent()
EventFormComponent()
taskFormComponent()
ArticleFormComponent()
ChatFormComponent()
FriendFormComponent()

// useFriends()
// getFriends()
// getUsers().then(FriendList())


getFriends()
    .then(getUsers)
    .then(FriendList)