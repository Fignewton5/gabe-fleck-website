//This JavaScript file handles the AngularJS Routing for the SPA (Single Page Application)
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "home.html"
	})
	.when("/home", {
		templateUrl: "home.html"
	})
	.when("/about", {
		templateUrl: "about.html"
	})
	.when("/contact", {
		templateUrl: "contact.html"
	})
	.otherwise( {
		template: "<h1>OTHERWISE</h1>"
	});
});