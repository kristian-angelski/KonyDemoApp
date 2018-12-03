define({ 
  Validate: function() {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.view.txtUserName.text === null) {
      this.view.txtUserName.text = '';
    }
    if (this.view.txtPass.text === null) {
      this.view.txtPass.text = '';
    }

    if (this.view.txtUserName.text.length < 1) {
      this.view.lblInvalidMail.isVisible = true;
      this.view.txtUserName.skin = "errSkin";
    }

    if (this.view.txtPass.text.length < 1) {
      this.view.lblInvalidPass.isVisible = true;
      this.view.txtPass.skin = "errSkin";
    }
    if (this.view.txtUserName.text.match && this.view.txtPass.text.length > 0) {
      var ntf = new kony.mvc.Navigation("frmHome");
      ntf.navigate();
      this.view.txtUserName.text = '';
      this.view.txtPass.text = '';
      this.view.lblInvalidMail.isVisible = false;
      this.view.lblInvalidPass.isVisible = false;
      this.view.txtUserName.skin = "defTextBoxNormal";
      this.view.txtPass.skin = "defTextBoxNormal";
    }
    blueLine: function() {
      
    }
      
  }});