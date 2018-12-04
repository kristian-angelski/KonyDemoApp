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
   	this.view.flxHomePosts.add(newPost);
    
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