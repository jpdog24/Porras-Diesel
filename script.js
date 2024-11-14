'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});




//SLideshow

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
},5000);
