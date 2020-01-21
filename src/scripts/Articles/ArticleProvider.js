// created by Adrian

let articles = []

export const useArticles = () => {
    return articles.slice();
};
export const editArticles = (articlesObject) => {
  return fetch(`http://localhost:8088/articles/${articlesObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(articlesObject)
  })
      .then(getArticles)

}

export const deleteArticles = (articlesId) => {
  return fetch(`http://localhost:8088/articles/${articlesId}`, {
      method: "DELETE"
  })
  .then(getArticles)
}

export const getArticles = () => {
    return fetch('http://localhost:8088/articles', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedArticles => {
            // console.table(parsedArticles);
            articles = parsedArticles.slice()
        })

    }

export const saveArticle = article => {
<<<<<<< HEAD
 return fetch('http://localhost:8088/articles', {
=======
   return fetch('http://localhost:8088/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
}