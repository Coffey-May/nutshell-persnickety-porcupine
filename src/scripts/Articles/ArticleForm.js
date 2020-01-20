import {getUsers,useUsers,saveUser }from "../Users/UserProvider.js"
import {editArticles, deleteArticles, saveArticle, getArticles } from "./ArticleProvider.js"

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.newsDiv');

export const ArticleFormComponent = () => {
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveBtnArticle") {
            // Get what user entered
            console.log('hi clicked')
            
            const newEvent = document.querySelector(".eventName").value
            const newEventDate = document.querySelector(".eventDate").value
            const newEventLocation = document.querySelector(".eventLocation").value


            const newEventObject = {
                "id": Math.floor(Math.random() * 1000) + 4,
                "event": newEvent,
                // "eventDate" newEventDate,
                // "location" newEventLocation
            }

            // Change the app state
            saveArticle(newEventObject)

            // Dispatch a custom event that state was changed
            const message = new CustomEvent("eventStateChanged")
            eventHub.dispatchEvent(message)
        }
    })



const render = () => {
    contentTarget.innerHTML =`
<h2 class="newsHeader">NEWS</h2>
<div class="newsForm">
    <form action="">
        <label for="">Name</label>
        <input type="text"><br>
        <label for="">Date</label>
        <input type="date"><br>
        <label for="">Location</label>
        <input type="text">
    </form>
    <button id="saveBtnArticle">Save Article</button>
</div>
`
}
render()
}