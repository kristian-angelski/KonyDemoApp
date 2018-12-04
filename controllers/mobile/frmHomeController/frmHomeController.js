define({ 

 //Type your controller code here 
	addPost() {
		let input = this.view.areaTweet.text;
		let newPost = new com.softserveinc.post();
		
		if (input !== null || input !== '') {
			newPost.post = input;
		} else {
			return;
		}
		
		this.view.flxMain.add(newPost);
		
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
	}

 });