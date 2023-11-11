// Script for choosing a tariff for a month or a year

var monthlyBtn = document.getElementById("monthly-btn");
var yearlyBtn = document.getElementById("yearly-btn");
var prices = document.getElementsByClassName("rates__price");

monthlyBtn.addEventListener("click", function () {
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");
    for (var i = 0; i < prices.length; i++) {
        var monthlyPrice = prices[i].getAttribute("data-monthly-price");
        prices[i].innerHTML = "$" + monthlyPrice + "<span>/month</span>";
    }
});

yearlyBtn.addEventListener("click", function () {
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
    for (var i = 0; i < prices.length; i++) {
        var yearlyPrice = prices[i].getAttribute("data-monthly-price") - 15 / 100 * prices[i].getAttribute("data-monthly-price");
        prices[i].innerHTML = "$" + Math.round(yearlyPrice) + "<span>/month</span>";
    }
});

// Script for moving from the "Hero" section to the "Rates" section

$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click( function(e){
	    var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    e.preventDefault();
    });
});

// Script for burger menu

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon--active');
    document.body.classList.toggle('no-scroll');
}