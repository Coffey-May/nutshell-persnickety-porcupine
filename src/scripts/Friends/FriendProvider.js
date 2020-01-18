//Author: Eli Tamez
let friends = []

export const useFriends = () => {
    return friends;
};

export const getFriends = () => {
    return fetch('http://localhost:8080/friends?_expand=user', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedFriends => {
            // console.table(parsedNotes);
            friends = parsedFriends.slice()
        })

    }

export const saveFriend = friend => {
    fetch('http://localhost:8080/friends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    })
    .then(getFriends)
}