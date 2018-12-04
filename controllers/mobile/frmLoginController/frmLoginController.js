define({ 

  validate: function() {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.view.txtUsernameMailNumber.text === null) {
      this.view.txtUsernameMailNumber.text = '';
    }

    if (this.view.txtPassword.text === null) {
      this.view.txtPassword.text = '';
    }

    if (this.view.txtUsernameMailNumber.text.length < 1) {
      this.view.lblRequiredEmail.isVisible = true;
    }

    if (this.view.txtPassword.text.length < 1) {
      this.view.lblRequiredPassword.isVisible = true;
    }

    if (this.view.txtUsernameMailNumber.text.match(mail) && this.view.txtPassword.text.length > 0) {
      var ntf = new kony.mvc.Navigation("frmProfile");
      ntf.navigate();
      this.view.txtUsernameMailNumber.text = '';
      this.view.txtPassword.text = '';
      this.view.lblRequiredEmail.isVisible = false;
      this.view.lblRequiredPassword.isVisible = false;
    }
  }
});