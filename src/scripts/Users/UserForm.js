import { useUsers, saveUser } from "./UserProvider.js";

// Adrian edited html
//Coffey html template insert.
//Rebecca made changes to input ids and added functionality/eventHub
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.userForm');






export const userFormComponent = () => {
    eventHub.addEventListener("click", clickEvent => {
        const allUsersArray = useUsers()
        const userName = document.querySelector("#userName").value
        const password1 = document.querySelector("#password1").value
        const password2 = document.querySelector("#password2").value
        
    if (clickEvent.target.id === "saveNewUser"){
        if (userName != "" && password1 != "") {
            const foundMatchingUser = allUsersArray.find(user => user.userName === userName)
            if (foundMatchingUser = undefined) {
                if (password1 === password2) {
                const newUser = {
                    "userName": userName,
                    "userPassword": password1
                
                }
                saveUser(newUser)
            }
            else {
                
                alert ("passwords do not match")
            }
            }
            else {
                alert("Account already exists")
            }
            }
            else {
            alert("Please fill out all fields")
            }
            
        }
    }
    )

	const render = () => {
		contentTarget.innerHTML = `

<div class="userFormDiv">
<h1 class="welcomeHeader">WELCOME TO NUTSHELL</h1>
    <form action="">
        <label class="userLabels" for="">E-MAIL</label>
        <input type="email" id="userName"><br>
        <label class="userLabels" for="">Password</label>
        <input type="password" id="password1"><br>
        <a href="url">REGISTER A NEW ACCOUNT</a><br>
        <label class="userLabels" for="">CONFIRM PASSWORD</label>
        <input type="password" id="password2">
    </form>
    <button class="newUserBtn"id="saveNewUser">REGISTER</button>
</div>
`
};
render();
}
