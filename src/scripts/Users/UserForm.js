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
        <a href="url">REGISTER A NEW ACCOUNT</a>
        <label for="">CONFIRM PASSWORD</label>
        <input type="password">
    </form>
    <button>REGISTER</button>
</div>
`;
};
render();
};
