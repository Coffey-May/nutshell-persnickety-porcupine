import { useUsers, saveUser, getUsers } from "./UserProvider.js";
import { NutShellDashBoard } from "../main.js";
// Adrian edited html
//Coffey html template insert.
//Rebecca made changes to input ids and added functionality/eventHub
//Coffey worked on login functionality
export const LogInForm = () => {
  contentTarget.innerHTML = `
    <div class="welcomeForm">
    <div class="welcomeFormContent">
    <h1>WELCOME TO NUTSHELL</h1>
      <form action="">
          <label class="userLabels" for="">E-MAIL</label>
          <input type="email" id="userName"><br>
          <label class="userLabels" for="">Password</label>
          <input type="password" id="password"><br>
          </form>
          <button type="button" id="logInButton">Log In</button>
          <br>
          <button type="button" id="registerNewButton">Register A New Account</button>
          </div>
  </div>
  `;
};
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".userForm")


export const userFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    // const password1 = document.querySelector("#password1").value;
    // const password2 = document.querySelector("#password2").value;
    //    compare code
    if (clickEvent.target.id === "logInButton") {
      const users = useUsers();
      console.log(users);
      const userName = document.querySelector("#userName").value;
      const foundUser = users.find(user => user.userName === userName);
    if (foundUser === undefined) {
      alert("Please register a new Account");
        } else {
            sessionStorage.setItem("activeUser", foundUser.id);
            const contentTarget = document.querySelector(".userForm");
            contentTarget.innerHTML = "";
            const message = new CustomEvent("userLoggedIn")
            eventHub.dispatchEvent(message)
        }
    }
  });
};

export const RegisterNewAccountForm = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerNewButton") {
      const contentTarget = document.querySelector(".userForm");
      contentTarget.innerHTML = `
    <h1>REGISTER A NEW ACCOUNT</h1>
    <div>
        <form action="">
            <label class="userRegisterLabels" for="">E-MAIL</label>
            <input type="email" id="userName"><br>
            <label class="userLabels" for="">Password</label>
            <input type="password" id="password1"><br>
            password" id="password1"><br>
            <label class="userLabels" for="">Password</label>
            <input type="password" id="password2"><br>
            </form>
            <button type="button" id="registerButton">Register</button>
            </div>`;
    }
  });
};
export const RegisterNewAccount = () => {
    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerButton") {
        let userNameValue = document.querySelector("#userName").value;
        let emailValue = document.querySelector("#userName").value;
        let passwordValue = document.querySelector("#password1").value;
        let passwordValue2 = document.querySelector("#password2").value;
        if (userNameValue === "" || emailValue === "" || passwordValue === "") {
          alert("Please fill out all Fields");
        }else if (passwordValue !== passwordValue2) {
            window.alert("Passwords Don't Match")
        }
        else {
          const newUser = {
            userName: userNameValue,
            userEmail: emailValue,
            userPassword: passwordValue
          };
          saveUser(newUser).then(
            () => {
                if (sessionStorage.hasOwnProperty("activeUser")) {
                const message = new CustomEvent("newUserRegistered")
                eventHub.dispatchEvent(message)

            }
          
          
            
          })
        //   .then broadcast event
          
        }
      }
    }) 
  };

