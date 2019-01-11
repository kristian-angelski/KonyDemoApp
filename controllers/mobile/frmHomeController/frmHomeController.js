define({ 

	//Type your controller code here 
	showAddFrm() {
		// navigate to FRMADDNEWTWEET	
		let nav = new kony.mvc.Navigation('frmAddNewTweet');
		nav.navigate();
	},

	getAllPosts() {
		let tweet = new TweetDto();
		tweet.findAll([], {}, 
									(res) => this.showTweets(res), 
									(err) => alert(err));
	},

	showTweets(tweets) {
		for (let tweet of tweets) {
			// 			alert(tweet.content);
			let newPost = new com.softserveinc.post({
				'id': tweet.userId,
				'isVisible': true
			}, {}, {});

			newPost.post = tweet.content;
			try {
				this.view.flxHomePosts.add(newPost);
			} catch(err) {
				alert('error occured ' + err);
			}
		}
	},

});