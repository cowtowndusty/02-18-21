import { photos } from "./photos.mjs"; 

// const items = photos[Math.floor(Math.random() * photos.length)];

// const randomize = document.querySelector('button');

// const output = `<section><img class="random-iotd" src="${items}" alt="Random Responsive Image Generator"></section>`;

// document.querySelector('main').innerHTML = output;

// Create random array index
const randIndex = Math.floor(Math.random() * photos.length);

// Output object information
const mainImage = photos[randIndex].imgURL;

document.querySelector('h2').innerHTML = photos[randIndex].title;
document.querySelector('.mainImage').setAttribute('src', mainImage);
document.querySelector('figcaption').innerHTML = `Photo Credit: ${photos[randIndex].photoCredit}`;
