/*jslint browser: true*/
/*global $, console, window*/

/*Portfolio */

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".product__item").show("1000");
    } else {
      $(".product__item")
        .not("." + value)
        .hide("1000");
      $(".product__item")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
/*End Portfolio */

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
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");

    $("nav ul").toggleClass("active-menu");
  });
});
/*End Responsive Navigation*/
