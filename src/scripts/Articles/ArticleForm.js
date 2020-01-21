import {getUsers,useUsers,saveUser }from "../Users/UserProvider.js"
import {editArticles, deleteArticles, saveArticle, getArticles, useArticles } from "./ArticleProvider.js"

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.newsDiv');

export const ArticleFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", clickEvent => {
        console.log("edit button was clicked")
        const articleToBeEdited = clickEvent.detail.Id
        const allArticlesArray = useArticles()
        const theFoundArticle = allArticlesArray.find(
            (currentArticleObject) => {
                return currentArticleObject.id === parseInt(articleToBeEdited, 10)
            }
        )
        document.querySelector("#article-id").value=theFoundArticle.id
        document.querySelector(".articleName").value=theFoundArticle.articleTitle
        document.querySelector(".articleDate").value=theFoundArticle.postDate
        document.querySelector(".articleURL").value=theFoundArticle.articleURL
        document.querySelector(".articleSynopsis").value=theFoundArticle.articleSynopsis


       

    })
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveBtnArticle") {
            console.log('save button clicked')
            const hiddenInputValue = document.querySelector("#article-id").value
    
            if (hiddenInputValue !== "") {
                const editedArticle =   {
                    "id": parseInt(document.querySelector("#article-id").value, 10),
                    "articleTitle": document.querySelector(".articleName").value,
                    "articleSynopsis": document.querySelector(".articleSynopsis").value,
                    "articleURL": document.querySelector(".articleURL").value,
                    "postDate": document.querySelector(".articleDate").value,
                    "userId": sessionStorage.getItem("activeUser")

                }
              editArticles(editedArticle).then(() => {
                  eventHub.dispatchEvent(new CustomEvent("articleHasBeenEdited"))
              })

            } else  {
            // Get what user entered
            
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

            const message = new CustomEvent("articleStateChanged")
            eventHub.dispatchEvent(message)
            // Change the app state
        
           saveArticle(newArticleObject).then(() => eventHub.dispatchEvent(message))
            // Dispatch a custom event that state was changed
           
        }
           
        }
    })



const render = () => {
    contentTarget.innerHTML =`
    <h2>ARTICLES</h2>
<div class="newsForm">
    <form action="">
        <br><input type="hidden" id="article-id"></br>
        <label for="">Title</label>
        <input class="articleName" type="text"><br>
        <label for="">Synopsis</label>
        <input class="articleSynopsis" type="text"><br>
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

