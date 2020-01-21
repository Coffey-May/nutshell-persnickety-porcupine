// Initial code by Adrian

export const ArticleComponent = articles => {
  return `
    <section class="articleCard">
    <h3><strong>NEW ARTICLE</strong></h3>
    <p class="articleCardTitle">Title: ${articles.articleTitle}</p>
    <p class="articlesCardSynopsis">Synopsis: ${articles.articleSynopsis}</p>
    <p class="articlesCardURL">Link: ${articles.articleURL}</p>
    <p class="articlesCardTimeStamp">Date: ${articles.postDate}</p>
    <button>Edit Article</button>
    <button>Delete Article</button>
    </section>
  `;
};