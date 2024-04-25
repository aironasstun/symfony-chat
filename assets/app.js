/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

let navbarButton = document.getElementById('navbar-button');
let navbarSticky = document.getElementById('navbar-sticky');

function handleClickOutside(event) {
  if (!navbarSticky.contains(event.target) && event.target !== navbarButton) {
    navbarSticky.classList.add('hidden');
    document.body.removeEventListener('click', handleClickOutside);
  }
}

navbarButton.addEventListener('click', function(event) {
  event.stopPropagation();
  navbarSticky.classList.toggle('hidden');

  // If menu is opened, add event listener to detect clicks outside the menu
  if (!navbarSticky.classList.contains('hidden')) {
    document.body.addEventListener('click', handleClickOutside);
  }
});
