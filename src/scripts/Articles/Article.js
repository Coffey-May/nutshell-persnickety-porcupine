// Initial code by Adrian

export const ArticleComponent = (articles, users) => {
  if (articles.userId === sessionStorage.getItem("activeUser"))
  {
  return `
    <section class="articleCard">
    <h3><strong>NEW ARTICLE</strong></h3>
    <p class="articleCardTitle">Title: ${articles.articleTitle}</p>
    <p class="articlesCardSynopsis">Synopsis: ${articles.articleSynopsis}</p>
    <p class="articlesCardURL">Link: ${articles.articleURL}</p>
    <p class="articlesCardTimeStamp">Date: ${articles.postDate}</p>
    <button id="editArticle--${articles.id}">Edit Article</button>
    <button id="deleteArticle--${articles.id}">Delete Article</button>
    </section>
  `
  }
  else {
    return `
    <section class="articleCard">
    <h3><strong>NEW ARTICLE</strong></h3>
    <p class="articleCardTitle">Title: ${articles.articleTitle}</p>
    <p class="articlesCardSynopsis">Synopsis: ${articles.articleSynopsis}</p>
    <p class="articlesCardURL">Link: ${articles.articleURL}</p>
    <p class="articlesCardTimeStamp">Date: ${articles.postDate}</p>
    </section>
`
  };
};