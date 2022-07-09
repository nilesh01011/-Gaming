'use strict';

var preloads = document.querySelector('#loading');
window.addEventListener('load', function () {
  preloads.style.display = 'none';
});
var menubarBtn = document.querySelector('nav .menuBars'),
    overlay = document.querySelector('#overlay'),
    menuBar = document.querySelector('nav .media_nav'),
    nav = document.querySelector('.container nav'),
    cross_sidebar = document.querySelector('nav .media_nav .cross_sideBat i'),
    body = document.querySelector('body');
cross_sidebar.addEventListener('click', function () {
  menuBar.style.left = '-120%';
  overlay.style.left = '-120%';
  body.classList.remove('overlay-active');
  nav.classList.remove('addOverlay');
});
menubarBtn.addEventListener('click', function () {
  menuBar.style.left = '0';
  overlay.style.left = '0';
  body.classList.add('overlay-active');
  nav.classList.add('addOverlay');
});
overlay.addEventListener('click', function () {
  menuBar.style.left = '-120%';
  overlay.style.left = '-120%';
  body.classList.remove('overlay-active');
  nav.classList.remove('addOverlay');
});
var filter = document.querySelector('#filter'),
    Nav_list = document.querySelectorAll('#filter .nav li');
Nav_list.forEach(function (ele) {
  ele.addEventListener('click', function () {
    filter.querySelector('.nav li.active').classList.remove('active');
    ele.classList.add('active');
  });
});
var swiper = new Swiper('#games_platform', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiper = new Swiper('#gamingPlatform .content .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiper = new Swiper('#gamesDevices .content .swiper', {
  slidesPerView: 'auto'
});