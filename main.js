let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let moon_light = document.getElementById('moon_light');
let button = document.getElementById('button');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');
let menu = document.getElementById('menu');

window.addEventListener('scroll', function(){
     let value = window.scrollY;
     stars.style.left = value * 0.25 + 'px';
     moon.style.top = value * 1.05 + 'px';
     mountains_behind.style.top = value * 0.5 + 'px';
     mountains_front.style.top = value * 0 + 'px';
     moon_light.style.marginRight = value * 4 + 'px';
     moon_light.style.marginTop = value * 1.5 + 'px';
     button.style.marginTop = value * 1.5 + 'px';
     header.style.top = value * 0.5 + 'px';
})


menu.addEventListener('click', function(){
     header.classList.toggle('show');
});