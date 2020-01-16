//Author: Rebecca Patek
let friends = []

export const useFriends = () => {
    return friends;
};

export const getFriends = () => {
    return fetch('http://localhost:8088/friends', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedFriends => {
            // console.table(parsedNotes);
            users = parsedFriends.slice()
        })

    }

export const saveUser = user => {
    fetch('http://localhost:8088/friendsfriends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    })
    .then(getFriends)
}