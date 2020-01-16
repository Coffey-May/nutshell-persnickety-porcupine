const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends')

export const FriendFormComponent = () => {

const render = () => {
  contentTarget.innerHTML =   
`
<form action="">
<button>Add Friend</button>
<input type="text">
</form>
<button>Save Friend</button>
</div>
`
}
render()
}
