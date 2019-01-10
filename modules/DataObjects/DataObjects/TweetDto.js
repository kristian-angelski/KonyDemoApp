class TweetDto extends DataObject {
  constructor(data = {}) {
    super('tweets');
    
    super.defineProperty('userId');
    super.defineProperty('parentId');
    super.defineProperty('content');
    super.defineProperty('date');
    super.defineProperty('media_id');
    super.defineProperty('locLatitude');
    super.defineProperty('locLongitude');
    super.defineProperty('isPoll');
    super.defineProperty('status');
    super.defineProperty('type');
    
    this.state = Object.assign(this.state, data);
  }
		/**
  	userId: int,
    content: string
  */
	addTweet(id, content, successCallback, failCallback) {
		
		this.state = Object.assign(this.state, {
			userId: id,
		});
		
		this.state = Object.assign({}, content);
		this.submit(successCallback, failCallback);
	}
}