window.addEventListener('load',() => {
	document.getElementById("form").addEventListener("submit", cancelEvent => {
  		cancelEvent.preventDefault();
  			const name  	   = document.getElementById('name').value;
			const email 	   = document.getElementById('email').value;
			const password 	   = document.getElementById('password').value;
			const confPassword = document.getElementById('confPassword').value;

			verifiesEmpty(name, email, password, confPassword);
	});
});




function verifiesEmpty(name, email, password, confPassword) {
	if (name && email && password && confPassword) {
		validatorEmail(name, email, password, confPassword);
	}
}


function validatorEmail(name, email, password, confPassword) { 
	
	if (email) {
		const user   = email.substring(0, email.indexOf("@"));
		const domain = email.substring(email.indexOf("@")+ 1, email.length);

			if ((user.length >=4) && (domain.length >=4) &&
	    		(user.search("@") == -1)   &&  (domain.search("@") == -1) &&
	    		(user.search(" ") == -1)   &&  (domain.search(" ") == -1) &&
    			(domain.search(".") != -1) &&  (domain.indexOf(".") >= 1) &&
    			(domain.lastIndexOf(".") < domain.length - 1)){
					const password     = document.getElementById('password').value;
					const confPassword = document.getElementById('confPassword').value;
						passwordConfirmation(name, email, password, confPassword);
			} 

			else 
				return alert('E-mail inválido');
	}
	

}



function passwordConfirmation(name, email, password, confPassword) {
	if (confPassword === password) {
		register(name, email, password);
	}
}


function register(name,email,password) {
	localStorage.setItem('name',name);
	localStorage.setItem('email',email);
	localStorage.setItem('password',password);

	alert("Criado com sucesso")
}