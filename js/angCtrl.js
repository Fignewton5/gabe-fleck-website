//This is the JavaScript file that will control the application data model

app.controller("myCtrl", function($scope){
	//do data stuff here
});

//controller for the Contact page
app.controller("contactCtrl", function($scope){

});

//Konami Code
var code = "38384040373937396665";
var input = ""; 		//first initialize empty input string
var timer;				//variable to hold timeout function that wipes input



//jQuery to check for input (keyup)
$(document).keyup(function(e){
	//concatenate input value to string
	input += e.which;
	//clear the input wipe timer temporarily
	clearTimeout(timer);
	//set the input wipe timer temporarily (500 ms)
	timer = setTimeout(function(){ input = "";}, 1000);
	//check user input to see if it matches the desired code
	checkInput(input);
	console.log(input);
});

function checkInput(input){
	//compare input with code
	if(input === code){
		alert("SECRET UNLOCKED");
	}
}