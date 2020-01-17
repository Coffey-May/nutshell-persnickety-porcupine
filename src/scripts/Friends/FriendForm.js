const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.friends')

export const FriendFormComponent = () => {

const render = () => {
  contentTarget.innerHTML =   
`
<div>
<h2>FRIENDS</h2>
<form action="">
<button class="addBtnFriend">Add Friend</button>
<input type="text">
</form>
<button class="saveBtnFriend">Save Friend</button>
</div>
`
}
render()
}
