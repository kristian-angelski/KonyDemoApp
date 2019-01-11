define({ 

	//Type your controller code here 
	close() {
		// return to FRMHOME
		let nav = new kony.mvc.Navigation('frmHome');
		nav.navigate();
	},

	fail(err) {
		alert('unable to create tweet ' + JSON.stringify(err));
	},

	success() {
		let nav = new kony.mvc.Navigation('frmHome');
		nav.navigate();
	},

	createPost() {
		let currentUser = kony.store.getItem('loggedUser');
		let tweet = new TweetDto();
		let input = this.view.areaTweet.text;
		let tweetInfo = {};
		var currentDate = new Date();
		
		this.getLocation((position) => {
			alert(position);
			if( input !== null && input !== '' ) {
				tweetInfo = {
					userId: currentUser.id,
					content: input,
					date: position.coords.timestamp.toISOString(),
					locLatitude: position.coords.latitude,
					locLongitude: position.coords.longitude
				};
				// 			alert(tweetInfo);
				tweet.addTweet(tweetInfo, this.success, this.fail);
			} else {
				alert('tweet should not be empty');
			}
		});
	},

	getLocation(successCallback) {
		kony.location.getCurrentPosition(
			(position) => successCallback(position), 
			(err) => alert('unable to retrieve location'));
	}

});