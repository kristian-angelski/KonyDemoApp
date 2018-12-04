define({ 

  capturePhoto: function(eventobject){
    this.view.imgProfilePhoto.base64 = eventobject.base64;
  },

  changeName: function() {
    this.view.lblName.text = this.view.txtNameChange.text;
    this.view.flxEditingName.isVisible = false;
    this.view.txtNameChange.text = '';
  },
  
  captureWallpaper: function(eventobject) {
    this.view.imgWallpaper.base64 = eventobject.base64;
  }
});