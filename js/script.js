//grab a reference to the HTML body
var $body = $("html, body");
//grab the element the hashtag refers to and scroll to its top
$("a[href$='tag']").click(function(event){
	event.preventDefault();
	$body.animate({
		scrollTop: $(this.hash).offset().top
		}, 500);
});

var header;

//headhesive stuff
$(document).ready(function(){
	var options = {
		offset: "#headhesive-anchor"
	}
	//create new headhesive instance
	header = new Headhesive(".banner-nav", options);
});