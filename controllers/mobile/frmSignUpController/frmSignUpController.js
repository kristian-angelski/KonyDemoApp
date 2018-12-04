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

    if ( this.validateField(this.view.txtUserName) && this.validateField(this.view.txtPass) ) {
      if (kony.string.isValidEmail(this.view.txtUserName.text)) {
        this.signUp();
      } else {
        this.view.lineName.skin = 'sknLoginFrmInvalid';
      }
    }

    //     var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //     if (this.view.txtUserName.text === null) {
    //       this.view.txtUserName.text = '';
    //     }
    //     if (this.view.txtPass.text === null) {
    //       this.view.txtPass.text = '';
    //     }

    //     if (this.view.txtUserName.text.length < 1) {
    //       this.view.lblInvalidMail.isVisible = true;
    //       this.view.txtUserName.skin = "errSkin";
    //     }

    //     if (this.view.txtPass.text.length < 1) {
    //       this.view.lblInvalidPass.isVisible = true;
    //       this.view.txtPass.skin = "errSkin";
    //     }
    //     if (this.view.txtUserName.text.match && this.view.txtPass.text.length > 0) {
    //       var ntf = new kony.mvc.Navigation("frmHome");
    //       ntf.navigate();
    //       this.view.txtUserName.text = '';
    //       this.view.txtPass.text = '';
    //       this.view.lblInvalidMail.isVisible = false;
    //       this.view.lblInvalidPass.isVisible = false;
    //       this.view.txtUserName.skin = "defTextBoxNormal";
    //       this.view.txtPass.skin = "defTextBoxNormal";
    //     }

  }, 
  signUp() {
    let nav = new kony.mvc.Navigation('frmHome');
    nav.navigate();
  },
  blueLineName: function() {
    this.view.lineName.skin = "blueSkin";
  },
  blueLinePass: function() {
    this.view.linePass.skin = "blueSkin";
  }
});