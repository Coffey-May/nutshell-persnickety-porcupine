const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.chat')


export const ChatFormComponent = () => {


const render = () => {
contentTarget.innerHTML = `
<h2>CHAT</h2>
<div>
    <form action="">
        <button class="addMessageBtn">Create New Message</button>
        <input type="text">
    </form>
</div>
`
}
render()
}