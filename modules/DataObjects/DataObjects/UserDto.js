class UserDto extends DataObject {
  constructor(data = {}) {
    super('User');
    
    super.defineProperty('username');
    super.defineProperty('password');
    super.defineProperty('email');
    super.defineProperty('fullName');
    super.defineProperty('phone');
    super.defineProperty('address');
    super.defineProperty('coverImg');
    super.defineProperty('profileImg');
    super.defineProperty('passResetToken');
    
    
    this.state = Object.assign({}, data);
  }
  
  /**
  	username: string,
    password: string
  */
  signIn(username, password, successCallback, failCallback) {
    this.state = {
      username: username
    };
    
    this.fetch('username', function(result) {
      if (result && result.records) {
      if (this.hashPassword(password) == result.records[0].password)
      	successCallback(this.state);
        return;
      } else {
        failCallback({error: 'Not matching password'});
        return;
      }
      
      failCallback({error: 'Not existing user'});
    }.bind(this), failCallback);
  }
  
  /**
  	data: {
    	username: string
    	password: string (hashed)
    	email: string
    	fullName: string
    }
  */
  signUp(data, successCallback, failCallback) {
    //TODO: validate data
    this.state = Object.assign({}, data);
    this.submit(successCallback, failCallback);
  }
  
  /**
  	data: {
    	id: number,
    	username: string
    	password: string (hassed)
    	email: string
    	fullName: string
    	phone: string
    	address: string
    	coverImg: number
    	profileImg: number
    }
  */
  updateProfile(data) {
    this.state = Object.assign({}, data);
    this.submit(successCallback, failCallback);
  }
  
  hashPassword(password) {
  	return MD5('kony&^%^&' + password + 'power!!1');
  }
}
