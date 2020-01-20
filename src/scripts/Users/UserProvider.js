//Author: Rebecca Patek
// edited to session storage/Adrian
let users = []

export const useUsers = () => users.slice();




export const getUsers = () => {
    return fetch('http://localhost:8088/users?_expand=userId', {
        method: "GET",
}   
    ).then(res => res.json())
    .then(parsedUsers => {
         users = parsedUsers.slice()
 })
}
export const saveUser = user => {
    return fetch('http://localhost:8088/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((newUser)=>{
        sessionStorage.setItem("activeUser", newUser.id);
    })
    .then(getUsers)
}