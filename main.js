//Jason Bentley

//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){




	//Get ElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}


	//Creat select field element and populate with options
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
	}

	//Variable Defaults
	var mealType = [ "--Select--", "Chicken", "Beef", "Pork", "Veggie"];

	//Set Link and Submit Click Events
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);



});