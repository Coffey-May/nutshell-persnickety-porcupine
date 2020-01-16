import { useUsers, saveUser } from "./UserProvider";

//Coffey html temlate insert.
//Rebecca made changes and added functionality/eventHub
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
                    "userName": document.querySelector("#userName").value,
                    "userPassword": document.querySelector("#password1").value
                
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
    )}

	const render = () => {
		contentTarget.innerHTML = `
<h1>WELCOME TO NUTSHELL</h1>
<div>
    <form action="">
        <label for="">E-MAIL</label>
        <input type="email" id="userName">
        <label for="">Password</label>
        <input type="password" id="password1>
        <button>REGISTER</button>
        <label for="">CONFIRM PASSWORD</label>
        <input type="password" id="password2>
    </form>
    <button id="saveNewUser">SAVE NEW ACCOUNT</button>
</div>
`;
};
render();

