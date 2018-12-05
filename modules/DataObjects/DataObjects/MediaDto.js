/**
Example usage:

var image = new MediaDto();
image.image = 'mybase64_string';
image.timeStamp = new Date().toISOString();
image.submit(function(result){
	//implement success callback function
}, function(error){
	//implement error callback function
});


*/

class MediaDto extends DataObject {
  constructor(data = {}) {
    super('Media');
    
    super.defineProperty('image');
    super.defineProperty('timeStamp');
    
    this.state = Object.assign({}, data);
  }
}