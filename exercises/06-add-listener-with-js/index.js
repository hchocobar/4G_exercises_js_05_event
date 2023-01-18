window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
let element = document.querySelector("#theGreen");
element.addEventListener("click", function() {
	//your code here
	alert("wuju");
});
