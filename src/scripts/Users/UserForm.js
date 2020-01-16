//Coffey html temlate insert.
// Adrian edited html

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.userForm');






export const userFormComponent = () => {
	const render = () => {
		contentTarget.innerHTML = `
<h1>WELCOME TO NUTSHELL</h1>
<div>
    <form action="">
        <label for="">E-MAIL</label>
        <input type="email">
        <label for="">Password</label>
        <input type="passwaord">
        <button>REGISTER</button>
        <label for="">CONFIRM PASSWORD</label>
        <input type="password">
    </form>
    <button>SAVE NEW ACCOUNT</button>
</div>
`;
};
render();
};
