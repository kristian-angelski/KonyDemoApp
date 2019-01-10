define({ 

	//Type your controller code here 
	addPost() {
		let input = this.view.areaTweet.text;

		if (input === null || input === '') {
			return;
		}
		let newPost = new com.softserveinc.post({
			'id': Math.random(),
			'isVisible': true
		}, {}, {});

		newPost.post = input;
		try {
			this.view.flxHomePosts.add(newPost);	
			this.view.areaTweet.text = '';
		} catch(err) {
			alert('error occured ' + err);
		}	

		this.view.flxAddNewTweet.isVisible = false;
		this.view.flxMain.isVisible = true;
	},

	showAddFrm() {
		this.view.flxAddNewTweet.isVisible = true;
		this.view.flxMain.isVisible = false;
	},

	close() {
		this.view.flxAddNewTweet.isVisible = false;
		this.view.flxMain.isVisible = true;
	},

	fail(res) {
		alert('unable to create tweet ' + JSON.stringify(res));
	},

	createPost() {
		let currentUser = kony.store.getItem('loggedUser');
		let tweet = new TweetDto();
		let input = this.view.areaTweet.text;
		let tweetInfo = {};
		var currentDate = new Date();

		if( input !== null && input !== '' ) {
			tweetInfo = {
				userId: currentUser.id,
				content: input,
				date: currentDate.toISOString(),
				locLatitude: 0,
				locLongitude: 0
			};
			alert(tweetInfo);
			tweet.addTweet(tweetInfo, this.addPost, this.fail);
		} else {
			alert('tweet should not be empty');
		}
	}
});