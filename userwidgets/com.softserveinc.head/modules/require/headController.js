define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
		
		navigateToTweetFrm() {
			let tweetFrm = new kony.mvc.Navigation('frmTweet');
			tweetFrm.navigate();
		},
		
		navigateToProfileFrm() {
			let profileFrm = new kony.mvc.Navigation('frmProfile');
			profileFrm.navigate();
		}
	};
});