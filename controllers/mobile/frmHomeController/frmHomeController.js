define({ 

	//Type your controller code here 
	showAddFrm() {
		// navigate to FRMADDNEWTWEET	
		let nav = new kony.mvc.Navigation('frmAddNewTweet');
		nav.navigate();
	},
	
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
	},
	
	getAllPosts() {
		let tweet = new TweetDto();
		tweet.findAll([], {}, 
									(res) => alert(res), 
									(err) => alert(err));
	}
});