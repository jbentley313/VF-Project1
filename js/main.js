//Jason Bentley
//VFW 1206 
//Project 2

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
	
	function getCheckboxValues(){
		 	var	checkBoxes = document.forms[0].mealTime;
				tcheckedBoxes = [];
		for(var i=0; i<checkBoxes.length; i++){
			if(checkBoxes[i].checked){
			 newSelected = checkBoxes[i].value;
			tcheckedBoxes.push(newSelected);
			}	
		}
	}

	function toggleControls(n){
		switch(n){
			case "on":
				$("recipeForm").style.display = "none";
				$("clear").style.display = "inline";
				$("display").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("recipeForm").style.display = "block";
				$("clear").style.display = "inline";
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
		getCheckboxValues()
		//Get all of our form field value and store in an object.
		//Object properties contain array with the form label and input values.
		var item 			= {};
			item.recipename	= ["Recipe Name:", $("recipename").value];
			item.groups 	= ["Group: ",$("groups").value];
			item.rating		= ["Rating: ", $("rating").value];
			item.date		= ["Date Added: ", $("date").value];
			item.checks 	= ["Meal Time: " , tcheckedBoxes];
			item.directions = ["Directions: ", $("directions").value];
		//Save data into Local Storage: Use Stringify to convert the object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Recipe Saved!");

	}
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There are no recipes to display!");
			window.location.reload();
		}
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeLi = document.createElement("li");
			var linksLi= document.createElement("li");
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
				makeSublist.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons for each item
		}
	}
	//Make Item Links
	//Create edit and delete links for eachstored item when disp
	function makeItemLinks(key, linksLi){
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Recipe";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		//add line break
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);

		//add delete single item link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Recipe";
		// deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);

	}

	function editItem(){
		//grab data from item in l storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		//Show form
		toggleControls("off");

		//Populate form fields w/current lstorage vals
		$("groups").value = item.groups[1];
		$("recipename").value = item.recipename[1];
		$("rating").value = item.rating[1];
		$("date").value = item.date[1];
		$("directions").value = item.directions[1];
		// var formChecks = document.forms[0].mealTime;
		var placeValues = function(){
			var checkboxes = document.forms[0].mealTime;
			for(i=0, j=checkboxes.length; i<j; i++){
				for(n=0, m=item.checks[1].length; n<m; n++){
					if(checkboxes[i].value === item.checks[1][n]){
						checkboxes[i].setAttribute("checked", "checked");
					}
				}
			}
			console.log(item.checks);//console log to make sure the correct items have been saved
		};
		placeValues();
		

	};
			
			
			
			
		
		
		
		
		// if(item.checks[1]==" appetizer"){
		// 	$("appetizer").setAttribute("checked", "checked");
		// }
		// if(item.checks[2]==" breakfast"){
		// 	$("breakfast").setAttribute("checked", "checked");
		
		
	

	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All recipes are deleted!");
			window.location.reload();
			return false;
		}
	}
	//Variable Defaults
	var mealType = ["--Select--", "Chicken", "Beef", "Pork", "Veggie"],
		tcheckedBoxes

	;
	makeCats();
	
	//Set Link and Submit Click Events
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);



});