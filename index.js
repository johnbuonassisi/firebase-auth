var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {
			document.getElementById('authResult').textContent = JSON.stringify(authResult, undefined, 2);
			return false;
		},
		uiShown: function() {
			document.getElementById('loader').style.display = 'none';
		}
	},
	signInFlow: 'popup',
	signInOptions: [
		firebase.auth.GithubAuthProvider.PROVIDER_ID
	]
}
ui.start('#firebaseui-auth-container', uiConfig);

