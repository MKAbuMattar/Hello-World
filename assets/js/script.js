// ***** Custom Search Filter *****

// get input field and add 'keyup' event listener
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', search);

// get all cards in .main-wrapper
let cards = document.querySelectorAll('.main-wrapper .card');
let searchTerm = '';
let title = '';

function search(e) {
	// get input fieled value and change it to lower case
	searchTerm = e.target.value.toLowerCase();

	cards.forEach((card) => {
		// navigate to h4 in the card, get its value and change it to lower case
		title = card.firstElementChild.firstElementChild.textContent.toLowerCase();
		// it search term not in the card's title hide the card. otherwise, show it.
		title.includes(searchTerm) ? card.style.display = 'flex' : card.style.display = 'none';
	});
}