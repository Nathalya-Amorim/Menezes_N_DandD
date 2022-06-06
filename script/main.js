// We always start with a module to encapsulate our own code
// This is called an IIFE ( Immediately - Invoked Function Expression)

(() => {

	// define the element you want the user to interact with
	// let theBadge = document.querySelector("#badge")
   //=============================================== 

	// set up the puzzle pieces and boards

    //  Collect the buttons at the bottom of the page
	// Collect ALL of the elements that we want the user to interact with and also elements that change
	// JS holds these in memory so that it can access them later ( these are elements in the HTML)
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
	gameBoard = document.querySelector('.puzzle-board'),
	pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
	dropZones = document.querySelectorAll('.drop-zone');



	/* theThumbnails collects all of the image elemets into an array-like container that looks like this:
	[
			<img src="images/buttonZero.jpg" alt="thumbnail">
			<img src="images/buttonOne.jpg" alt="thumbnail">
	    	<img src="images/buttonTwo.jpg" alt="thumbnail">
			<img src="images/buttonThree.jpg" alt="thumbnail">
	]
	*/

	function changeBgImg() {
		// The "this" keyword refers to the element that triggers this function ( the nav button we click with the custom data attribute of bgref)
		// debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		dropZones.forEach(item => {item.innerHTML = ""});
		puzzleBoard = document.querySelector(".puzzle-pieces");
		puzzleBoard.innerHTML = "";
		pzlPieces[0].src = `images/topLeft${this.dataset.bgref}.jpg`;
		pzlPieces[1].src = `images/topRight${this.dataset.bgref}.jpg`;
		pzlPieces[2].src = `images/bottomLeft${this.dataset.bgref}.jpg`;
		pzlPieces[3].src = `images/bottomRight${this.dataset.bgref}.jpg`;
		pzlPieces.forEach(item => puzzleBoard.appendChild(item));
	}

	function allowDrag(event) {
		console.log('started draggin me');
		// create a reference to the element we're dragging so we can retrieve it later
		event.dataTransfer.setData('draggedEl', this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		// override default behaviour on certain elements when an event happens
		console.log('starting draggin over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log('dropped me');
		
		if (event.target.childElementCount == 0 && !(event.target instanceof HTMLImageElement)){
			let droppedElId = event.dataTransfer.getData('draggedEl');
		
			// retrieve the dragged el by its ID, and then put inside the current drop zone
	
			this.appendChild(document.querySelector(`#${droppedElId}`));
		} 

	}

	// add event handling here 
	// how do we want the user to interact with the elements that we collected earlier?
	// Events are things like clicks, double-clicks, keypresses...all the ways that a user can interact with a mouse, keyboard...

	theThumbnails.forEach(thumb => thumb.addEventListener('click', changeBgImg));
	pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	
	// Set up the drop zone event handling
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});

	// The name "thumbs, theThumbnails, changeBgImg" are created by me 
	// dragstart and click are part of javaScript language
})();
