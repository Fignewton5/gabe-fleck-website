//navbar scrolling
$('#about-bullet').click(function(){
	//update nav list
	$(".sidebar li").removeClass("active");
	$("#about-bullet").addClass("active");
	//scroll to about
	$('#about').get(0).scrollIntoView();
});
$('#portfolio-bullet').click(function(){
	//update nav list
	$(".sidebar li").removeClass("active");
	//scroll to portfolio
	$('#portfolio').get(0).scrollIntoView();
	$("#portfolio-bullet").addClass("active");
});
$('#contact-bullet').click(function(){
	//update nav list
	$(".sidebar li").removeClass("active");
	//scroll to contact
	$('#contact').get(0).scrollIntoView();
	$("#contact-bullet").addClass("active");
});
$('#resume-bullet').click(function(){
	//update nav list
	$(".sidebar li").removeClass("active");
	//scroll to resume
	$('#resume').get(0).scrollIntoView();
	$("#resume-bullet").addClass("active");
});

//code that will recognize if window scrolls past a certain point (+1 corrects scroll adjustment)
var targetOffsetAbout = $("#about").offset().top - 1;
var targetOffsetPortfolio = $("#portfolio").offset().top - 1;
var targetOffsetContact = $("#contact").offset().top - 1;
var targetOffsetResume = $("#resume").offset().top - 1;

//bind window scroll event to variable
var $w = $(window).scroll(function(){
	if(($w.scrollTop() >= targetOffsetAbout) && ($w.scrollTop() < targetOffsetPortfolio)){
		//console.log("about");
		//update nav list
		$(".sidebar li").removeClass("active");
		$("#about-bullet").addClass("active");
	} else if(($w.scrollTop() >= targetOffsetPortfolio) && ($w.scrollTop() < targetOffsetContact)){
		//console.log("portfolio");
		//update nav list
		$(".sidebar li").removeClass("active");
		$("#portfolio-bullet").addClass("active");
	} else if(($w.scrollTop() >= targetOffsetContact) && ($w.scrollTop() < targetOffsetResume)){
		//console.log("contact");
		//update nav list
		$(".sidebar li").removeClass("active");
		$("#contact-bullet").addClass("active");
	} else if($w.scrollTop() >= targetOffsetResume){
		//console.log("resume");
		//update nav list
		$(".sidebar li").removeClass("active");
		$("#resume-bullet").addClass("active");
	}
});

//flag that determines if About Me animation was completed
var aboutAnimationFinished = false;

//code that will fire About Me animations on mouse hover
$("#about-container").on("mouseover", function(){
	if(!aboutAnimationFinished){
		//rotate picture and move to the left
		$(".my-pic").animate({
			left: 0,
			myRoto: -360 	//fake css-property to get rotation
			}, {
			//called once per property
			step: function(now, fx){
				//if being called on the rotation property
				if(fx.prop == "myRoto"){
					$(".my-pic").css("transform", "rotate("+now+"deg)");
					//other browsers
					$(".my-pic").css("-webkit-transform", "rotate("+now+"deg)");
					$(".my-pic").css("-moz-transform", "rotate("+now+"deg)");
				}
			}, duration: "slow",
			complete: function(){
				//toggle the bio container
				$("div.my-bio").removeAttr("hidden");
			}});
		//fade in bio text
		$("div.my-bio").animate({
			opacity: 1,
			left: 0
			}, {
			duration: 2000,
			complete: function(){
				aboutAnimationFinished = true;
			}});
	}
});