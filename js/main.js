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


const photoPicture = document.querySelector(".photo-picture");

function onPictureClick() {
    photoPicture.src = "https://picsum.photos/200/300";
    photoPicture.width = "288";
    photoPicture.height = "360";
}
photoPicture.addEventListener('click', onPictureClick);


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



