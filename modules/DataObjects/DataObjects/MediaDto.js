/**
Example usage:

var image = new MediaDto();
image.image = 'mybase64_string';
image.date = new Date().toISOString();
image.submit(function(result){
	//implement success callback function
}, function(error){
	//implement error callback function
});


*/

class MediaDto extends DataObject {
  constructor(data = {}) {
    super('media');
    
    super.defineProperty('image');
    super.defineProperty('date');
    
    this.state = Object.assign(this.state, data);
  }
	
	uploadImage(data, successCallback, failCallback) {
		this.state = Object.assign(this.state, data);
		this.submit(successCallback, failCallback);
	}
}