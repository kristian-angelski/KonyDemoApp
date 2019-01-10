define({ 
	validateField(field) {
		return field.text !== null && field.text !== '';
	},

	validateForm() {
		if (!this.validateField(this.view.txtEmail) && !kony.string.isValidEmail(this.view.txtEmail.text)) {
			this.view.flxEmailHr.skin = 'sknLoginFrmInvalid';
		} else {
			this.view.flxEmailHr.skin = 'sknLoginFrmHR';
		}

		if (!this.validateField(this.view.txtPassword)) {
			this.view.flxPasswordHr.skin = 'sknLoginFrmInvalid';
		} else {
			this.view.flxPasswordHr.skin = 'sknLoginFrmHR';
		}

		if ( this.validateField(this.view.txtEmail) && this.validateField(this.view.txtPassword) ) {
			if (kony.string.isValidEmail(this.view.txtEmail.text)) {

				var userDto = new UserDto();
				userDto.signIn(this.view.txtEmail.text, this.view.txtPassword.text, this.logIn, this.failLogin);
			} else {
				this.view.flxEmailHr.skin = 'sknLoginFrmInvalid';
			}
		}
	},

	logIn(user) {
		// extracting needed info from current logged user
		let currentUser = {
			username: user.username,
			fullName: user.fullName,
			email: user.email,
			id: user.id
		};
		// 		alert(currentUser);
		// setting info for current logged user into localstorage
		try {
			kony.store.setItem('loggedUser', currentUser);	
		} catch(err) {
			alert('unable to set logged user info to localstorage' + err);
		}

		let nav = new kony.mvc.Navigation('frmHome');
		nav.navigate();
	},

	signUp() {
		let nav = new kony.mvc.Navigation('frmSignUp');
		nav.navigate();
	},

	failLogin(err) {
		alert(err);
	}
});