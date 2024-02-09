/*
This file will contain all the JavaScript code for the project.
It is used to create the functionality of the website.
*/

// Function to display the mobile navigation
var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}