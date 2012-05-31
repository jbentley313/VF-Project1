//Jason Bentley

//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){




	//Get ElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	var mealType = [ "--Select--", "Chicken", "Beef", "Pork", "Veggie"];


	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);



});