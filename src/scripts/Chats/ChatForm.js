const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.chat')


export const ChatFormComponent = () => {


const render = () => {
contentTarget.innerHTML = `
<h4>CHAT</h4>
<div>
    <form action="">
        <button>Create New Message</button>
        <input type="text">
    </form>
</div>
`
}
render()
}