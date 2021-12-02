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

//

// OBSERVER
//haal de elementen op die je wilt laten animeren, in dit geval de sections
const allAnimationItems = document.querySelectorAll('.hero h1')

// de opties - 
// rootMargin: vanaf welk punt hij gaat checken, dus als deze op 20px staat moet hij eerst sowieso 20px in beeld zijn
// threshold: hoeveel van het item moet in beeld zijn 
const options = {
    threshold: 0.1
}

// de callback functie is de functie die uitgevoerd wordt wanneer het element in of uit beeld gaat
function callbackFunction(entries) {
    entries.forEach(entry => {
        // check of het element in beeld is
        if (entry.intersectionRatio > 0) {
          //voeg de class toe wanneer deze in beeld is
          entry.target.classList.add('fade')   
        }
    })
}

// maak de observer aan en geef deze de callback functie mee en de opties
const observer = new IntersectionObserver(callbackFunction, options)

//loop over alle elementen heen die je wilt laten observeren
allAnimationItems.forEach(item => {
    //observeer het element
    observer.observe(item)
})

//

function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
	
  
  /****************/
	/* DE BOLLETJES */
	/****************/
  
  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
			// elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function(e){
				// als er geklikt wordt
        
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// de id van het bijbehorende element bepalen
				let newElementID = this.hash.substring(1); // de # eraf halen
        // dan naar het element met ID scrollen
        scrollToElement(newElementID);
      });
    }
	}
  
  
  /*****************************/
	/* LINKS/RECHTS LINK-BUTTONS */
	/*****************************/  

	// de links/rechts link-buttons initialiseren en activeren
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
			// beide link-buttins naar kliks laten luisteren
      linkButton.addEventListener("click", function(e){
        // als er geklikt wordt
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// bepalen of er op 'previous' of 'next' geklikt is
				let direction = this.getAttribute("href");
				// naar het element gaan
				goToElement(direction);
      });
    }
	}
  
  
  /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
		bolletjes[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
  //////////////////////////////////
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement.id);
  }
  
  
  ///////////////////////////
  // scroll to new element //
  function scrollToElement(elementID) {
    // nieuwe element current element maken
    updateCurrentElement(elementID);

    // scrollLeft van de container aanpassen
    let theElement = carrousel.querySelector("#"+elementID);
    let elementOffset = theElement.offsetLeft;
    carrouselElementsContainer.scrollLeft = elementOffset;

    // de bolletjes updaten
    updateBolletjes(elementID);
  }
  
  
  ////////////////////////////
	// update current element //
	function updateCurrentElement(elementID) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// het nieuwe element opzoeken
		let newElement = carrousel.querySelector("#"+elementID);
		// de class current toevoegen
		newElement.classList.add("current");
	}

  
  //////////////////////
  // update bolletjes //
  function updateBolletjes(elementID){
		// het huidige current bolletje opzoeken
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentBolletje.classList.remove("current");
		
		// het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector("a[href='#"+elementID+"']");
		// de class current toevoegen
		newBolletje.classList.add("current");
  }

  
  
	// de bolletjes activeren
  iniBolletjes();	
  // de linkbuttons activeren
  iniLinkButtons();	
  // de carrousel bij het begin starten
  iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("bolletjesAndLinkButtons");
  //je kunt hier ook meerdere carrousellen activeren
})();
  