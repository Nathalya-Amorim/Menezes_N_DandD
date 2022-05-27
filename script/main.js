(() => {

	// define the element you want the user to interact with
	// let theBadge = document.querySelector("#badge")
   //=============================================== 

	// set up the puzzle pieces and boards

    //  Collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
	gameBoard = document.querySelector(".puzzle-board");

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
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}

	// add event handling here 
	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBgImg));

	// The name "thumbs, theThumbnails, changeBgImg" are created by me 




	
})();
