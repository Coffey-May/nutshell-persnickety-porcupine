// Initial code by Adrian

export const ArticleComponent = articles => {
  return `
    <section class="articleCard">
    <p class="articleCardTitle">Title: ${articles.articleTitle}</p>
    <p class="articlesCardSynopsis">Synopsis: ${articles.articleSynopsis}</p>
    <p class="articlesCardURL">Link: ${articles.articleURL}</p>
    <p class="articlesCardTimeStamp">Date: ${articles.postDate}</p>
    </section>
  `;
};