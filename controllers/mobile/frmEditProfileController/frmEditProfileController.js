define({ 

	capturePhoto: function(eventobject) {
		let image = new MediaDto();
		let user = new UserDto();
		let currentLogged = kony.store.getItem('loggedUser');
		let imgInfo = {
			image: eventobject.base64,
			date: new Date().toISOString()
		};

		image.uploadImage(imgInfo, (result) => {
			currentLogged = Object.assign(currentLogged, {profileImg: result.id});
			user.updateProfile(currentLogged, (result) => {
				alert("successfully uploaded profile image.");
				this.view.imgProfilePhoto.base64 = eventobject.base64;
			}, (error) => {
				alert(JSON.stringify(error));
			});
		}, (error) => { 
			alert(JSON.stringify(error));
		});
	},

	changeName: function() {
		this.view.lblName.text = this.view.txtNameChange.text;
		this.view.flxEditingName.isVisible = false;
		this.view.txtNameChange.text = '';
	},

	captureWallpaper: function(eventobject) {
		let image = new MediaDto();
		let user = new UserDto();
		let currentLogged = kony.store.getItem('loggedUser');
		let imgInfo = {
			image: eventobject.base64,
			date: new Date().toISOString()
		};

		image.uploadImage(imgInfo, (result) => {
			currentLogged = Object.assign(currentLogged, {coverImg: result.id});
			user.updateProfile(currentLogged, (result) => {
				alert("successfully uploaded cover image.");
				this.view.imgWallpaper.base64 = eventobject.base64;
			}, (error) => {
				alert(JSON.stringify(error));
			});
		}, (error) => { 
			alert(JSON.stringify(error));
		});
	},

	toFrmProfile() {
		var nav = new kony.mvc.Navigation('frmProfile');
		nav.navigate();
	}

});