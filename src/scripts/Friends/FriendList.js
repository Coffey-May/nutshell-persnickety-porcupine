import { useFriends } from "./FriendProvider.js"
import Friend from "./User.js"
const eventHub = document.querySelector("container");
const contentTarget = document.querySelector("userForm")

const UserList = () =>   {


    const appStateUsers = useUsers()

    // Add the eventHub lister
    eventHub.addEventListener("activeUserLoggedIn", event => {
        render([])
    })





    const render = users => {
        contentTarget.innerHTML = `
        <div>
            <div>
            <h2> Nutshell Users </h2>
            </div>
        <section class="userComponent">     
        
        <div class="user">
                ${
            users.map(userObject => {
                const userHTML = User(userObject)
                return userHTML
            }).join("")
            }
        </div>
        </section>
        </div>
     `

    };

    render(appStateUsers)

}

export default UserList