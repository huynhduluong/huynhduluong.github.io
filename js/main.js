/*jslint browser: true*/
/*global $, console, window*/

/*To Top*/
var toTop = document.getElementById("scroll-up");

window.addEventListener("scroll", myFunction);

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    toTop.style.visibility = "visible";
  } else {
    toTop.style.visibility = "hidden";
  }
}
/*End To Top*/

/*Responsive Navigation*/
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        
        $('nav ul').toggleClass('active-menu')
       
        
    })
});
/*End Responsive Navigation*/