
const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.newsDiv');

export const ArticleFormComponent = () => {



const render = () => {
    contentTarget.innerHTML =`
<h4>NEWS</h4>
<div>
    <form action="">
        <button>Add Article</button>
        <label for="">Name</label>
        <input type="text">
        <label for="">Date</label>
        <input type="date">
        <label for="">Location</label>
    </form>
    <button>Save Article</button>
</div>
`
}
render()
}