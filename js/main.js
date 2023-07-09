// const myName = "Artem";

// console.log("Hello, world!");
// console.log(myName);
// // console.log("Artem");
// console.log(30 + 39);
// console.log("Good morning");



const title = document.querySelector('.cats-title');

const logotype = document.querySelector('.site-logo img');
const body = document.querySelector('body');



console.log(logotype);



function onLogoClick() {
    logotype.classList.toggle("is-hidden");
}
 
title.addEventListener("click", onLogoClick);


const catPhoto = document.querySelector(".cat-photo");

function onPhotoClick() {
  catPhoto.src = "https://picsum.photos/seed/picsum/200/300";
  catPhoto.width = "288";
  catPhoto.height = "360";
}
catPhoto.addEventListener("click", onPhotoClick);


// title.classList.remove('cats-title')

// console.log(title);

// title.style.cssText = "color: green; font-size: 70px";
// title.style.fontSize = "80px";


// console.dir(document);



// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt
// Object



 const slider = document.querySelector(".hero-list");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 1000,
  easing: 'cubic-bezier(.17,.67,.32,1.34)',
  threshold: 100
});


function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener('click', onNextClick);
prev.addEventListener('click', onPrevClick);