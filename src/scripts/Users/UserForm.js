import { useUsers, saveUser } from "./UserProvider.js";

// Adrian edited html
//Coffey html template insert.
//Rebecca made changes to input ids and added functionality/eventHub
export const LogInForm = () => {
    contentTarget.innerHTML = `
  <h1>WELCOME TO NUTSHELL</h1>
  <div>
      <form action="">
          <label class="userLabels" for="">E-MAIL</label>
          <input type="email" id="userName"><br>
          <label class="userLabels" for="">Password</label>
          <input type="password" id="password"><br>
          </form>
          <button id="logInButton">Log In</button>
          <br>
          <a href="url">REGISTER A NEW ACCOUNT</a>
  </div>
  `
  }
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".userForm");

export const userFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    // const password1 = document.querySelector("#password1").value;
    // const password2 = document.querySelector("#password2").value;
    //    compare code
    if (clickEvent.target.id === "logInButton") {
      const users = useUsers();
      console.log(users)
      const userName = document.querySelector("#userName").value;
      const foundUser = users.find(user => user.userName === userName);
      if (foundUser === undefined) {
        alert("Please register a new Account");
      } else {
        sessionStorage.setItem("activeUser", foundUser.id);
        const contentTarget = document.querySelector(".userForm");
        contentTarget.innerHTML = "";
      }
    }
    }
    )
}


    ;

    // const RegisterNewAccountForm = () => {
    //   contentTarget.innerHTML = `
    //     <h1>REGISTER A NEW ACCOUNT</h1>
    //     <div>
    //         <form action="">
    //             <label class="userRegisterLabels" for="">E-MAIL</label>
    //             <input type="email" id="userName"><br>
    //             <label class="userLabels" for="">Password</label>
    //             <input type="password" id="password1"><br>
    //             <label class="userLabels" for="">Password</label>
    //             <input type="password" id="password2"><br>
    //             </form>
    //             <button id="registerButton">Register</button>
    //             </div>`;
    // };

    // RegisterNewAccountForm()
