import {getUsers,useUsers,saveUser }from "../Users/UserProvider.js"
import {editArticles, deleteArticles, saveArticle, getArticles } from "./ArticleProvider.js"

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.newsDiv');

export const ArticleFormComponent = () => {
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveBtnArticle") {
            // Get what user entered
            console.log('hi clicked')
            
            const newArticle = document.querySelector(".articleName").value
            const newArticleDate = document.querySelector(".articleDate").value
            const newArticleURL = document.querySelector(".articleURL").value
            const newArticleSynopsis = document.querySelector(".articleSynopsis").value

            const newArticleObject = {
                
                "articleTitle": newArticle,
                "articleSynopsis": newArticleSynopsis,
                "articleURL": newArticleURL,
                "postDate": newArticleDate,
                "userId": sessionStorage.getItem("activeUser")
            }


            // Change the app state
           console.log(newArticleObject)

            // Dispatch a custom event that state was changed
            const message = new CustomEvent("eventStateChanged")
            eventHub.dispatchEvent(message)

            saveArticle(newArticleObject).then(() => eventHub.dispatchEvent(message))
        }
    })



const render = () => {
    contentTarget.innerHTML =`

<div class="newsForm">
    <form action="">
        <label for="">Title</label>
        <input class="articleName type="text"><br>
        <label for="">Synopsis</label>
        <input class="articleSynopsis type="text"><br>
        <label for="">Date</label>
        <input class="articleDate" type="date"><br>
        <label for="">URL</label>
        <input class="articleURL"type="text">
    </form>
    <button id="saveBtnArticle">Save Article</button>
</div>
`
}
render()
}

