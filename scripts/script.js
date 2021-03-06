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
menuButton.addEventListener('keydown', openMenu);

//**************************************
// Hier graag geen vragen over stellen
// Bron: https://codepen.io/SamSloot/pen/MWEYwOB en https://codepen.io/deannabosschert/pen/NWaqJVE?editors=1111
// OBSERVER
const allAnimationItems = document.querySelectorAll('.animate-1, .animate-2')

// DE OPTIES 
const options = {
    threshold: 0.1
}

function callbackFunction(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('fade')   
        }
    })
}

// Oobserver met callback functie en de opties
const observer = new IntersectionObserver(callbackFunction, options)

//loop over alle elementen heen die je wilt laten observeren
allAnimationItems.forEach(item => {
    //observeer het element
    observer.observe(item)
})

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

/* DE CARROUSEL CRE??REN */
(function() {
  createCaroCarrousel("bolletjesAndLinkButtons");
})();

//**************************************