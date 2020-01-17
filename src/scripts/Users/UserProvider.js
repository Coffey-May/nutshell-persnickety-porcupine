//Author: Rebecca Patek
let users = []

export const useUsers = () => {
    return users;
};

export const getUsers = () => {
    return fetch('http://localhost:8088/users', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedUsers => {
            // console.table(parsedNotes);
            users = parsedUsers.slice()
        })

    }
console.log(parsedUsers)
export const saveUser = user => {
    fetch('http://localhost:8088/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(getUsers)
}