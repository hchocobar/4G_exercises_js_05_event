window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
let element = document.querySelector("#button2");
element.addEventListener("click", function() {
	//your code here
	alert("evento click agregado");
});
