const contentTarget = document.querySelector('.tasks')
const eventHub = document.querySelector('.container')


export const taskFormComponent = () => {








const render = () => {
    contentTarget.innerHTML =`
    <h4>TASKS</h4>
    <div>
        <form action="">
            <label for="">Tasks</label>
            <input type="text">
             </form>
            <button>Save</button>
            <button>Edit</button>
            <button>Delete</button>
    </div>`
}
render()
};