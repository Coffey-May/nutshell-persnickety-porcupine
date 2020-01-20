//Coffey initial setup  of the Article list
import { useArticles } from "./ArticleProvider.js"
import { useUsers,getUsers,saveUser } from "../Users/UserProvider"
import { ArticleComponent } from "./Article.js"
// import { BuildingCount } from "./BuildingCount.js"
// import { BuildingCard } from "./BuildingCard.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".articleList")


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
        const updatedArticles = useArticles()
        render(updatedArticles, updatedUsers)
    })


    //  STILL NEEDS WORK
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

    render(tasks, users)
}