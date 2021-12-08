console.log("Yuan's Hot Pot");

// Menu openen
var menuButton = document.querySelector("header nav button");

// Hamburgermenu animatie
var span1 = document.querySelector("header nav button span:first-of-type");
var span2 = document.querySelector("header nav button span:nth-of-type(2)");
var span3 = document.querySelector("header nav button span:last-of-type");

  // Menu openen
function openMenu() {
  var menu = document.querySelector("header nav ul");
  menu.classList.toggle("toonMenu");

  // Hamburgermenu animatie
  span1.classList.toggle("span-1");
  span2.classList.toggle("span-2");
  span3.classList.toggle("span-3");
}

// Hamburgermenu button werkt
menuButton.addEventListener ("click", openMenu);

//**************************************
// Soup base
var menuKnop1 = document.querySelector(".prijslijst article:first-of-type h3");

function openKlapMenu1() {
  var kaart1 = document.querySelector(".prijslijst article:first-of-type dl");
  kaart1.classList.toggle("hetMenu");
  menuKnop1.classList.toggle("plusMin");

    // Bron: https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function(){ kaart1.classList.toggle("fade-in"); }, 200);
}

menuKnop1.addEventListener ("click", openKlapMenu1);

// Skewer meat
var menuKnop2 = document.querySelector(".prijslijst article:nth-of-type(2) h3");

function openKlapMenu2() {
  var kaart2 = document.querySelector(".prijslijst article:nth-of-type(2) ul");
  kaart2.classList.toggle("hetMenu");
  menuKnop2.classList.toggle("plusMin");

    setTimeout(function(){ kaart2.classList.toggle("fade-in"); }, 200);
}

menuKnop2.addEventListener ("click", openKlapMenu2);

// Dishes
var menuKnop3 = document.querySelector(".prijslijst article:last-of-type h3");

function openKlapMenu3() {
  var kaart3 = document.querySelector(".prijslijst article:last-of-type section");
  kaart3.classList.toggle("hetMenu");
  menuKnop3.classList.toggle("plusMin");

    setTimeout(function(){ kaart3.classList.toggle("fade-in"); }, 200);
}

menuKnop3.addEventListener ("click", openKlapMenu3);

//**************************************
// Hier graag geen vragen over stellen
// Bron: https://codepen.io/shooft/pen/zYKEyrN
function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
  let linkButtons = carrousel.querySelectorAll(":scope > a");

	/* DE BOLLETJES */
  function iniBolletjes() {
    for (bolletje of bolletjes) {
      bolletje.addEventListener("click", function(e){
				e.preventDefault();
				let newElementID = this.hash.substring(1); 
        scrollToElement(newElementID);
      });
    }
	}
  
	/* LINKS/RECHTS LINK-BUTTONS */
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
      linkButton.addEventListener("click", function(e){
				e.preventDefault();
				let direction = this.getAttribute("href");
				goToElement(direction);
      });
    }
	}
  
	/* START POSITIE */
  function iniStartPosition() {
    carrouselElements[0].classList.add("current");
		bolletjes[0].classList.add("current");
    carrouselElementsContainer.scrollLeft = 0;
  }
  
	/* ALGEMENE FUNCTIES */
  // naar volgende/vorige element //
  function goToElement(direction) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		let newElement;
		if (direction == "previous") {
			newElement = currentElement.previousElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			newElement = currentElement.nextElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}
		scrollToElement(newElement.id);
  }
  
  // scroll to new element //
  function scrollToElement(elementID) {
    updateCurrentElement(elementID);
    let theElement = carrousel.querySelector("#"+elementID);
    let elementOffset = theElement.offsetLeft;
    carrouselElementsContainer.scrollLeft = elementOffset;
    updateBolletjes(elementID);
  }
  
  
	// update current element //
	function updateCurrentElement(elementID) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		currentElement.classList.remove("current");
		let newElement = carrousel.querySelector("#"+elementID);
		newElement.classList.add("current");
	}

  // update bolletjes //
  function updateBolletjes(elementID){
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		currentBolletje.classList.remove("current");
		
    let newBolletje = carrousel.querySelector("a[href='#"+elementID+"']");
		newBolletje.classList.add("current");
  }

  iniBolletjes();	
  iniLinkButtons();	
  iniStartPosition();
}

/* DE CARROUSEL CREËREN */
(function() {
  createCaroCarrousel("bolletjesAndLinkButtons");
})();

//**************************************
// Openklap menu 2.0
// Bron: https:www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
// Ik heb de code hier boven geprobeerd om werkend te maken. Maar het lukte niet. 
// Ik heb het geprobeerd met CSS Target maar dat lukte ook niet
// var menuKaartOpen = document.querySelector(".prijslijst article:first-of-type h3");
// var kaart1 = document.querySelector(".prijslijst article:first-of-type dl");

// function myFunction() {
//     if (kaart1.style.display === "none") {
//         kaart1.style.display = "block";
//     } else {
//         kaart1.style.display = "none";
//     }
// }

// kaart1.style.display = "none";
// menuKaartOpen.addEventListener ("click", myFunction);
