window.addEventListener("load", function(){
	/*
	 * Override the revokeChoice function. Will get the revoke tab to ack as a settings tab.
	 */
	window.cookieconsent.Popup.prototype.revokeChoice = function(preventOpen) {
		this.options.enabled = true;

		//We don't want this next line as we want the button to pop up and allow us to change the settings.
		//this.clearStatus();

		this.options.onRevokeChoice.call(this);

		if (!preventOpen) {
			this.autoOpen();
		}
		this.open();
	};

	/*
	 * deleteCookies
	 * delete all cookies except those listed in the array essential
	 */
	window.cookieconsent.Popup.prototype.deleteCookies = function() {
		//List of essential cookies - set as an empty array to delete everything - i.e. var essential = [];
		var essential = ["cookieconsent_status", "DYNSRV"];

		//create array of cookies set
		var cookies = document.cookie.split(";");

		//loop through the cookies
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];

			//Get the cookie name
			var eqPos = cookie.indexOf("=");
			var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

			//Delete all cookies except those listed in essential
			if (essential === undefined || essential.length == 0 || essential.indexOf(name) == -1){
				//Note assuming path is always = '/'
				document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
			}
		}
	};

	/*
	 *Setup cookieconsent
	 */
	window.cookieconsent.initialise({
		container: document.getElementsByTagName("body"),		//Change this to the element you wish
		"cookie": {
			"domain": "testing.vagrant",
			"path": "/",
			"expiryDays": 365,
		},
		"palette": {
			"popup": {
				"background": "#000"
			},
			"button": {
				"background": "#f1d600"
			}
		},
		"type": "opt-in",
		"content": {
			"dismiss": 'Got it!',					//ignored, left for completness
			"deny": 'Decline unnecessary cookies',
			"message": "This website uses necessary cookies to ensure you get the best experience on our website.",
			"allow": "Allow cookies",
			"link": "Learn more",
			"href": "http://www.mydomain.co.uk/cookies",
		},
		compliance: {
			/*
			 * Alter the message to show {{deny}} instead of {{dismiss}}
			 */
			'opt-in': '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
		},
		revokable:true,
		onStatusChange: function(status, chosenBefore) {
			//If cookies not allowed delete them
			if (status != 'allow'){
				this.deleteCookies();
			}
		},
		onInitialise: function (status) {
			//If cookies not allowed delete them
			if (!this.hasConsented()){
				this.deleteCookies();
			}
		},
		onPopupOpen: function() {
			// Get the elements with the allow and deny tages, i.e. the buttons
			var myAllow = document.getElementsByClassName("cc-allow")[0].classList;
			var myDeny  = document.getElementsByClassName("cc-deny")[0].classList;

			if (!this.hasConsented()){
				myDeny.remove('cc-notselected');
				myDeny.add('cc-selected');
				myAllow.remove('cc-selected');
				myAllow.add('cc-notselected');
			}else{
				myAllow.remove('cc-notselected');
				myAllow.add('cc-selected');
				myDeny.remove('cc-selected');
				myDeny.add('cc-notselected');
			}
		},
		onRevokeChoice: function() {
			//Put YOUR code here to delete, remove, edit (whatever) cookies.
		},
		law: {
			regionalLaw: true,
		},
		/*
		 *Change the text on the revoke button to settings
		 */
		revokeBtn: '<div class="cc-revoke {{classes}}">Cookie settings</div>',
		location: false,
	})
});
