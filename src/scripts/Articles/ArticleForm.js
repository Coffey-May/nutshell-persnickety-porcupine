
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.newsDiv');

export const ArticleFormComponent = () => {



const render = () => {
    contentTarget.innerHTML =`
<h2 class="newsHeader">NEWS</h2>
<div class="newsForm">
    <form action="">
        <button class="addBtnArticle">Add Article</button><br>
        <label for="">Name</label>
        <input type="text"><br>
        <label for="">Date</label>
        <input type="date"><br>
        <label for="">Location</label>
        <input type="text">
    </form>
    <button class="saveBtnArticle">Save Article</button>
</div>
`
}
render()
}