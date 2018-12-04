define({ 
  validateField(field) {
    return field.text !== null && field.text !== '';
  },

  validateForm() {
    if (!this.validateField(this.view.txtEmail)) {
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
        this.logIn();
      } else {
        this.view.flxEmailHr.skin = 'sknLoginFrmInvalid';
      }
    }
  },

  logIn() {
    let nav = new kony.mvc.Navigation('frmHome');
    nav.navigate();
  },

  signUp() {
    let nav = new kony.mvc.Navigation('frmSignUp');
    nav.navigate();
  }



});