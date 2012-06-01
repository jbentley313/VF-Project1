//Jason Bentley

//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){




	//Get ElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}


	//Create select field element and populate with options
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=mealType.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = mealType[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	//Variable Defaults
	var mealType = [ "--Select--", "Chicken", "Beef", "Pork", "Veggie"];
	makeCats();

	//Set Link and Submit Click Events
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);



});