//Coffey initial setup of the event list    
// import { useTasks } from "./TaskProvider.js"
import { useUsers, getUsers, saveUser } from "../Users/UserProvider.js"
import { ArticleComponent } from "./Article.js"
import { ArticleFormComponent } from "./ArticleForm.js"
import { useArticles } from "./ArticleProvider.js"
// import { BuildingCount } from "./BuildingCount.js"
// import { BuildingCard } from "./BuildingCard.js"

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


     //STILL NEEDS WORK
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

    

