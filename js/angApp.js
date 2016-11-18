//This is the main JavaScript file that will handle the AngularJS module

//initialize module
//need to include ngRoute and ngAnimate
var app = angular.module("mySite", ["ngRoute", "ngAnimate"]);

//this is a custom directive that will change the <li> elements in the nav bar
//to become active according to the current route
app.directive('bsActiveLink', ['$location', function ($location) {
return {
    restrict: 'A', //use as attribute 
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
			//only for initial page load; make home button active
			if($location.path() === "/"){
				makeHomeActive();
				return;
			}
			//create an array of what the URL path looks like
            var hrefs = ['/#' + $location.path(),
                         '#' + $location.path(), //html5: false
                         $location.path()]; //html5: true
			//for each <a> element in the nav bar
            angular.forEach(elem.find('a'), function (a) {
				//convert the <a> element to a jQuery element
                a = angular.element(a);
				//if the href attribute of the element matches one of the URL's in the URL array
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
					//add the active class to the <li> element
                    a.parent().addClass('active');
                } else {
					//or else remove the active class from the <li> element
                    a.parent().removeClass('active');   
                };
            });     
        });
    }
}
}]);

//small function that makes the home button in the navbar active
function makeHomeActive(){
	var homeTab = $("a[href='#/home']");
	homeTab.parent().addClass("active");
}