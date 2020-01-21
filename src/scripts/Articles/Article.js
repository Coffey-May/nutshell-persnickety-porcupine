// Initial code by Adrian

export const ArticleComponent = articles => {
  return `
    <section class="articleCard">
    <h3><strong>NEW ARTICLE</strong></h3>
    <p class="articleCardTitle">Title: ${articles.articleTitle}</p>
    <p class="articlesCardSynopsis">Synopsis: ${articles.articleSynopsis}</p>
    <p class="articlesCardURL">Link: ${articles.articleURL}</p>
    <p class="articlesCardTimeStamp">Date: ${articles.postDate}</p>
    <button id="editArticle--${article.id}">Edit Article</button>
    <button id="deleteArticle--${article.id}">Delete Article</button>
    </section>
  `;
};