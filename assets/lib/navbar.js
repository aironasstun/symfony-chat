let navbarButton = document.getElementById('navbar-button');
let navbar = document.getElementById('navbar');

function handleClickOutside(event) {
  if (!navbar.contains(event.target) && event.target !== navbarButton) {
    navbar.classList.add('hidden');
    document.body.removeEventListener('click', handleClickOutside);
  }
}

console.log(navbarButton)
navbarButton.addEventListener('click', function(event) {
  event.stopPropagation();
  navbar.classList.toggle('hidden');

  // If menu is opened, add event listener to detect clicks outside the menu
  if (!navbar.classList.contains('hidden')) {
    document.body.addEventListener('click', handleClickOutside);
  }
});
