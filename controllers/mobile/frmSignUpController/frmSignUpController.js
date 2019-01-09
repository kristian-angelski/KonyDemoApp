define({ 
	validateField(field) {
		return field.text !== null && field.text !== '';
	},
	validate() {
		if (!this.validateField(this.view.txtUserName) && !kony.string.isValidEmail(this.view.txtUserName.text)) {
			this.view.lineName.skin = 'sknLoginFrmInvalid';
		} else {
			this.view.lineName.skin = 'sknLoginFrmHR';
		}

		if (!this.validateField(this.view.txtPass)) {
			this.view.linePass.skin = 'sknLoginFrmInvalid';
		} else {
			this.view.linePass.skin = 'sknLoginFrmHR';
		}

		if (!this.validateField(this.view.txtFullName)) {
			this.view.lineFullName.skin = 'sknLoginFrmInvalid';
		} else {
			this.view.lineFullName.skin = 'sknLoginFrmHR';
		}

		if ( this.validateField(this.view.txtUserName) && this.validateField(this.view.txtPass) ) {
			if (kony.string.isValidEmail(this.view.txtUserName.text)) {
				this.createUser();
			} else {
				this.view.lineName.skin = 'sknLoginFrmInvalid';
			}
		}
	}, 
	signUp() {
		alert('success');		
		let nav = new kony.mvc.Navigation('frmHome');
		nav.navigate();
	},
	blueLineName: function() {
		this.view.lineName.skin = "blueSkin";
	},
	blueLinePass: function() {
		this.view.linePass.skin = "blueSkin";
	},
	createUser() {
		let user = new UserDto();

		let userInfo = {
			username: this.view.txtUserName.text.split('@')[0],
			password: user.hashPassword(this.view.txtPass.text),
			email: this.view.txtUserName.text,
			fullName: this.view.txtFullName.text
		};

		user.signUp(userInfo, this.signUp, this.fail);
	},					
	fail() {
		alert('unable to create user');
	}
});