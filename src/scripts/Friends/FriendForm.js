const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends')

export const FriendFormComponent = () => {

const render = () => {
  contentTarget.innerHTML =   
`
<div>
<h4>FRIENDS</h4>
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
