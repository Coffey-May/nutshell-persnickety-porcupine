const contentTarget = document.querySelector('.tasks')
const eventHub = document.querySelector('.container')


export const taskFormComponent = () => {








const render = () => {
    contentTarget.innerHTML =`
    <h2>TASKS</h2>
    <div>
        <form action="">
            <label for="">Tasks</label>
            <input type="text">
             </form>
            <button class="saveTaskBtn">Save</button>
            <button class="editTaskBtn">Edit</button>
            <button class="deleteTaskBtn">Delete</button>
    </div>`
}
render()
};