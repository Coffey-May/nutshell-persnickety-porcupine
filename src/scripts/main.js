import { userFormComponent, LogInForm } from "./Users/UserForm.js";
import {taskFormComponent} from "./Tasks/TaskForm.js";
import {EventFormComponent} from "./Events/EventForm.js";
import {ArticleFormComponent} from "./Articles/ArticleForm.js";
import {ChatFormComponent} from "./Chats/ChatForm.js"
import { FriendFormComponent } from "./Friends/FriendForm.js";
import { getUsers } from "./Users/UserProvider.js";

getUsers()
EventFormComponent()
LogInForm()
userFormComponent()
taskFormComponent()
ArticleFormComponent()
ChatFormComponent()
FriendFormComponent()
