
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.newsDiv');

export const ArticleFormComponent = () => {



const render = () => {
    contentTarget.innerHTML =`
<h4>NEWS</h4>
<div>
    <form action="">
        <button>Add Article</button><br>
        <label for="">Name</label>
        <input type="text"><br>
        <label for="">Date</label>
        <input type="date"><br>
        <label for="">Location</label>
        <input type="text">
    </form>
    <button>Save Article</button>
</div>
`
}
render()
}