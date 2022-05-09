import { landscapesArray } from '../landscape-data.js';
import { findById } from '../utils.js';

const landscapeName = document.getElementById('landscape-name');
const landscapeImage = document.getElementById('landscape-image');
const landscapePara = document.getElementById('landscape-para');

const parameters = new URLSearchParams(window.location.search);
console.log(parameters.get('id'), landscapesArray);

const nature = findById(parameters.get('id'), landscapesArray);
console.log(nature);


landscapeName.textContent = nature.name;
landscapeImage.src = `../assets/${nature.name}.jpg`;
landscapePara.textContent = `This is one of Cheyanne's favorite types of nature, 
    she says "${nature.shyEnjoyment} would go again!"`;