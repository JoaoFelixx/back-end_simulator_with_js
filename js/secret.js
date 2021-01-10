if (!sessionStorage.getItem('username')) {

	let alert = confirm('Você não tem cadastro, portanto não pode entrar nessa área !');

		if (alert || !alert) {
			window.location = 'login.html';
		}
}
