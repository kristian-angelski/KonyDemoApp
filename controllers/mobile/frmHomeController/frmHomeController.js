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
	
	fail() {
		alert('unable to create tweet');
	},

	createPost() {
		let user = new UserDto();
		let tweet = new TweetDto();
		let input = this.view.areaTweet.text;
		alert(user);
		
		tweet.addTweet(5, input, this.addPost, this.fail);
	}

});