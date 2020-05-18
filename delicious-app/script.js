var numberOfRecipies = 4;

function exploreRecipe(id, number) {
	var p = document.getElementById("recipe" + number);
	var x = document.getElementById(id);

	if (p.style.display !== "grid") {
		var i;
		for (i = 1; i <= numberOfRecipies; i++) {
			document.getElementById("flip-card" + i).style.transform = "rotateY(0deg)";
			document.getElementById("recipe" + i).style.display = "none";
		}
		p.style.display = "grid";
		x.style.transform = "rotateY(180deg)";
	} else {
		x.style.transform = "rotateY(0deg)";
		p.style.display = "none";
	}
}

function openForm() {
  	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  	document.getElementById("myForm").style.display = "none";
}

function addRecipe() {
	var title = document.getElementById("title").value;
	var directions = document.getElementById("directions").value;
	
	if (title == "" || directions == "") {
		document.getElementById("notFilled").innerHTML = "Please enter data!";
	} else {
		if (document.getElementById("url1").value == "") {
			document.getElementById("url1").value = "image/recipe/noImage.jpg";
		} else if (document.getElementById("url2").value == "") {
			document.getElementById("url2").value = "image/recipe/noImage.jpg";
		}
		createRecipe();
		closeForm();
	}
}

function createMenu(number) {
	var title = document.getElementById("title").value;
	var url1 = document.getElementById("url1").value;
	var url2 = document.getElementById("url2").value;

	var menu = document.getElementById("menu");

	var newItem = document.createElement("div");
	newItem.className =  "item" + number;
	newItem.setAttribute("id", "new-recipe" + number);
	menu.appendChild(newItem);

	linkToMenu = document.createElement("a");
	linkToMenu.setAttribute("href", "#body");
	linkToMenu.setAttribute("title", "Check out " + title + " recipe");
	newItem.appendChild(linkToMenu);

	var flipDiv = document.createElement("div");
	flipDiv.className = "flip-card";
	linkToMenu.appendChild(flipDiv);

	var innerFlipDiv = document.createElement("div");
	innerFlipDiv.className = "flip-card-inner";
	innerFlipDiv.setAttribute("id", "flip-card" + number);
	innerFlipDiv.onclick = function() {
		exploreRecipe("flip-card" + number, number);
	}
	flipDiv.appendChild(innerFlipDiv);

	var frontCard = document.createElement("div");
	frontCard.className = "flip-card-front";
	innerFlipDiv.appendChild(frontCard);

	var frontImg = document.createElement("IMG");
	frontImg.setAttribute("src", url1);
	frontImg.setAttribute("alt", "tasty food");
	frontCard.appendChild(frontImg);

	var backCard = document.createElement("div");
        backCard.className = "flip-card-back";
        innerFlipDiv.appendChild(backCard);

        var backImg = document.createElement("IMG");
        backImg.setAttribute("src", url2);
        backImg.setAttribute("alt", "tasty food");
        backCard.appendChild(backImg);

	var text = document.createElement("p");
	text.innerHTML = title;
	linkToMenu.appendChild(text);
}

function createBody(number) {
	var title = document.getElementById("title").value;
	var directions = document.getElementById("directions").value;
	var url = document.getElementById("url2").value;

	var body = document.getElementById("body");
	
	var newRecipe = document.createElement("div");
	newRecipe.className = "recipe" + number;
	newRecipe.setAttribute("id", "recipe" + number);
	body.appendChild(newRecipe);
	
	var headerDiv = document.createElement("div");
	headerDiv.className = "header";
	newRecipe.appendChild(headerDiv);

	var h1Text = document.createElement("H1");
	h1Text.innerHTML = title;
	headerDiv.appendChild(h1Text);

	var contentDiv = document.createElement("div");
	contentDiv.className = "content";
	newRecipe.appendChild(contentDiv);

	var h2Text = document.createElement("H2");
	h2Text.innerHTML = "Directions";
	contentDiv.appendChild(h2Text);

	var directionsDiv = document.createElement("p");
	directionsDiv.innerHTML = directions;
	contentDiv.appendChild(directionsDiv);

	var deleteButton = document.createElement("img");
	deleteButton.className = "deleteButton";
	deleteButton.setAttribute("src", "image/icons/delete.png");
	deleteButton.setAttribute("alt", "Press to delete recipe");
	deleteButton.onclick = function() {
		document.getElementById("recipe" + number).style.display = "none";
		document.getElementById("new-recipe" + number).style.display = "none";
	}
	contentDiv.appendChild(deleteButton);

	var pictureDiv = document.createElement("div");
	pictureDiv.className = "picture";
	newRecipe.appendChild(pictureDiv);

	var picture = document.createElement("img");
	picture.setAttribute("src", url);
	picture.setAttribute("alt", title);
	pictureDiv.appendChild(picture);
}

function createRecipe() {
	numberOfRecipies++;

	createMenu(numberOfRecipies);
	createBody(numberOfRecipies);
}
