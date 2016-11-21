//grab a reference to the HTML body
var $body = $("html, body");

//reference to mobile pop-out nav menu
var popoutNav;
var popoutHidden = true;

//mobile pop-out nav menu control
$(".banner-dropdown").click(function(event){
	event.preventDefault();
	popoutNav.removeClass("pop-out-nav-hidden");
	popoutNav.addClass("pop-out-nav-shown");
	popoutHidden = false;
});
$("#pop-out-nav a").click(function(event){
	event.preventDefault();
	popoutNav.removeClass("pop-out-nav-shown");
	popoutNav.addClass("pop-out-nav-hidden");
	$body.animate({
		scrollTop: $(this.hash).offset().top - 150
		}, 500);
	popoutHidden = true;
});
$("#pop-out-nav~div").click(function(event){
	//when a div that is clicked other than the pop-out menu
	//hide the menu
	if(!popoutHidden){
		event.preventDefault();
		popoutNav.removeClass("pop-out-nav-shown");
		popoutNav.addClass("pop-out-nav-hidden");
		popoutHidden = true;
	}
});

//grab the element the hashtag refers to and scroll to its top
$(".banner-nav a[href$='tag'], .scroll-up-btn a[href$='tag']").click(function(event){
	event.preventDefault();
	$body.animate({
		scrollTop: $(this.hash).offset().top
		}, 500);
});

//headhesive reference
var header;

//headhesive stuff
$(document).ready(function(){
	var options = {
		offset: "#headhesive-anchor"
	}
	//create new headhesive instance
	header = new Headhesive(".banner-nav", options);
	//grab reference to mobile pop-out menu
	popoutNav = $("#pop-out-nav")
});
