import { useUsers, saveUser } from "./UserProvider.js";
//Coffey html temlate insert.
// Adrian edited html


//Coffey html temlate insert.
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
                alert("Account alread exists")
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
<h1>WELCOME TO NUTSHELL</h1>
<div>
    <form action="">
        <label for="">E-MAIL</label>
        <input type="email" id="userName">
        <label for="">Password</label>
        <input type="passwaord" id="password1">
        <a href="url">REGISTER A NEW ACCOUNT</a>
        <label for="">CONFIRM PASSWORD</label>
        <input type="password" id="password2">
    </form>
    <button id="saveNewUser">REGISTER</button>
</div>
`;
};
render();
}
