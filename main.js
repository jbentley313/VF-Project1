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

	function getCheckboxValue(){
		if($("appetizer").checked){
			appetizerValue = $("appetizer").value;
		}
		if($("breakfast").checked){
			breakfastValue = $("breakfast").value;
		}
		if($("lunch").checked){
			lunchValue = $("lunch").value;
		}
		if($("dinner").checked){
			dinnerValue = $("diner").value;
		}
	}

	function toggleControls(n){
		switch(n){
			case "on":
				$("recipeForm").style.display = "none";
				$("clear").style.display = "inline;"
				$("display").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("recipeForm").style.display = "block";
				$("clear").style.display = "inline;"
				$("display").style.display = "inline";
				$("addNew").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(){
		var id 				= Math.floor(Math.random()*100000001);
		//Get all of our form field value and store in an object.
		//Object properties contain array with the form label and input values.
		var item 			= {};
			item.recipename	= ["Recipe Name:", $("recipename").value];
			item.groups 	= ["Group:",$("groups").value];
			item.rating		= ["Rating:", $("rating").value];
			item.date		= ["Date Added:", $("date").value];
			item.directions = ["Directions:", $("directions").value];
		//Save data into Local Storage: Use Stringify to convert the object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Recipe Saved!");

	}
	function getData(){
		toggleControls("on");
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "display";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSublist = document.createElement("ul");
			makeLi.appendChild(makeSublist);
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSublist.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	//Variable Defaults
	var mealType = ["--Select--", "Chicken", "Beef", "Pork", "Veggie"],
		appetizerValue,
		breakfastValue,
		lunchValue,
		dinnerValue
	makeCats();
		

	//Set Link and Submit Click Events
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	// var clearLink = $("clear");
	// clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);



});