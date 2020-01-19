//Author: Eli Tamez
let friends = []



export const deleteFriend = (userId) => {
    // console.log(userId);
        return fetch(`http://localhost:8088/friends/${userId}`, 
       
        {
        method: "DELETE"
    })
    .then(getFriends)
}


export const useFriends = () => {
    return friends;
};

export const getFriends = () => {
    return fetch('http://localhost:8088/friends?_expand=user', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedFriends => {
            // console.table(parsedNotes);
            friends = parsedFriends.slice()
        })

    }

export const saveFriend = friend => {
    fetch('http://localhost:8088/friends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    })
    
    .then(getFriends)
}


// .then(res => res.json())
//     .then((newUser)=>{
//         sessionStorage.setItem("activeUser", newUser.id);
//     })
//     .then(getFriends)