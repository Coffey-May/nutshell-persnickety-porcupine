// Initial code by Adrian

export const ArticleComponent = articles => {
  return `
    <section class="articleCard">
    <div class="articleCardTitle">Title: ${articles.articleTitle}</div>
    <div class="articlesCardSynopsis">Synopsis: ${articles.articleSynopsis}</div>
    <div class="articlesCardURL">Link: ${articles.articleURL}</div>
    <div class="articlesCardTimeStamp">Date: ${articles.postDate}</div>
    </section>
  `;
};