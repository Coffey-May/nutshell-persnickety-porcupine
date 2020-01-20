import { userFormComponent, LogInForm } from "./Users/UserForm.js";
import {taskFormComponent} from "./Tasks/TaskForm.js";
import {EventFormComponent} from "./Events/EventForm.js";
import {ArticleFormComponent} from "./Articles/ArticleForm.js";
import {ChatFormComponent} from "./Chats/ChatForm.js"
import { FriendFormComponent } from "./Friends/FriendForm.js";
import { getUsers } from "./Users/UserProvider.js";
import {TaskList} from "./Tasks/TaskList.js"
import {EventList} from "./Events/EventList.js"

getUsers()
FriendFormComponent()
LogInForm()
userFormComponent()
EventFormComponent()
taskFormComponent()
ArticleFormComponent()
ChatFormComponent()
TaskList()
EventList()

