window.addEventListener('load', () => {
	const music = document.querySelectorAll('.music');
	const row = document.querySelectorAll('.row div');

// Change colour of block and background when scrolling over it

	row.forEach((block, index) => {
  	block.addEventListener('mouseover', function() {
  		row[index].classList.add('active');
  		document.body.style.backgroundColor = "#000000";
  		});
	});


// Change color of block and background back to original colour scrolling over it

	row.forEach((block, index) => {
  		block.addEventListener('mouseout', function() {
  		row[index].classList.remove('active');
  		document.body.style.backgroundColor = "#7c7c74";
  		});
	});


// Play sound on clicking a block

	row.forEach((sound, index) => {
  		sound.addEventListener('click', function() {
  		music[index].currentTime = 0;
    	music[index].play();
  		});
	});
});
