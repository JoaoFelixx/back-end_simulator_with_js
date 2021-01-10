window.addEventListener('load',() => {
	document.getElementById("form").addEventListener("submit", cancelEvent => {
  		cancelEvent.preventDefault();
  			validatorEmail(document.getElementById('email').value);
	});
})


function validatorEmail(email) { 
	if (email) {
		const user   = email.substring(0, email.indexOf("@"));
		const domain = email.substring(email.indexOf("@")+ 1, email.length);

			if ((user.length >=4) && (domain.length >=4) &&
	    		(user.search("@") == -1)   &&  (domain.search("@") == -1) &&
	    		(user.search(" ") == -1)   &&  (domain.search(" ") == -1) &&
    			(domain.search(".") != -1) &&  (domain.indexOf(".") >= 1) &&
    			(domain.lastIndexOf(".") < domain.length - 1)) 

				validatorPassword(document.getElementById('password').value,email)	
			else 
				return alert('E-mail inválido');
	}
	
 
}


function validatorPassword (password,email) {
	let error 		= [];
	let db_email    = localStorage.getItem('email');
	let db_password = localStorage.getItem('password');
	

	if (!db_email) {
		document.getElementById('email').value = '';
		document.getElementById('password').value = '';

		return alert(`Usuário não cadastrado`);
	}
	if (!password || password.length < 3) 
		error.push('Senha inválida');
				
	if (db_password === password) {
		sessionStorage.setItem('username',email);
			window.location = 'secret.html';
	}
	else 
		error.push('Senha incorreta');
	
	if (error.length > 0) {
		let alert = document.getElementById('alert');
			alert.setAttribute('class', 'alert alert-danger');
			alert.innerHTML = error;	
	}	


}

document.getElementsByClassName('ahref')[0].addEventListener('click', () => {
	let error = [];
	let email = prompt('Digite seu email');
	let name  = prompt('Digite seu nome');

	if (!name || !email) 
		error.push('Preencha todos os campos');
	
	if (name.length < 4 || email.length < 4) 
		error.push('Nome e E-mail deve conter no minimo 4 caracteres');
	
	if (name.length > 50 || email.length > 50)
		error.push('Nome e E-mail não pode ter mais de 50 caracteres');


	if (error.length > 0) {
		let alert = document.getElementById('alert');
			alert.setAttribute('class', 'alert alert-danger');
			alert.innerHTML = error;

	} 

})