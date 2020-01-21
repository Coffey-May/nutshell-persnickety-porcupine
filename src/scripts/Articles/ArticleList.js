//Coffey initial setup of the event list    
// import { useTasks } from "./TaskProvider.js"
//Rebecca added edit and delete functions

import { useUsers, getUsers, saveUser } from "../Users/UserProvider.js"
import { ArticleComponent } from "./Article.js"
import { ArticleFormComponent } from "./ArticleForm.js"
import { useArticles, deleteArticles } from "./ArticleProvider.js"


const eventHub = document.querySelector(".container")
let contentTarget = document.querySelector(".articleList")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addBtnArticle") {
    return ArticleFormComponent()
  }
})

export const ArticleList = () => {

    const articles = useArticles()
    const users = useUsers()
    
    eventHub.addEventListener("articleHasBeenEdited", event => {
        const updatedArticles = useArticles()
        render(updatedArticles, users)
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editArticle--")) {
            const [deletePrefix, Id] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    Id: Id
                }
        })
            eventHub.dispatchEvent(editEvent)

        }
        if (clickEvent.target.id.startsWith("deleteArticle--")) {
            const [deletePrefix, Id] = clickEvent.target.id.split("--")

            deleteArticles(Id).then(
                () => {
                    const theNewArticles = useArticles()
                    render(theNewArticles)
                }
            )
        }
    })
    eventHub.addEventListener("articleStateChanged", event => {
        const updatedArticles = useArticles()
        const updatedUsers = useUsers()
        render(updatedArticles, updatedUsers)
    })

    eventHub.addEventListener("userStateChanged", event => {
        const updatedUsers = useUsers()
        const updatedArticles = usearticles()
        render(updatedarticles, updatedUsers)
    })



    const render = (arrayOfArticles, arrayOfUsers) => {

        contentTarget.innerHTML = `
         

            ${
                arrayOfArticles.map(
                    article => {
                        return ArticleComponent(article, arrayOfUsers)
                    }
                ).join("")
            }
        `
    }
   
    render(articles, users)
    
}


    

