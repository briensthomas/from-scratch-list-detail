import { landscapesArray } from '../landscape-data.js';
import { findById } from '../utils.js';

const landscapeName = document.getElementById('landscape-name');
const landscapeImage = document.getElementById('landscape-image');
const landscape1 = document.getElementById('landscape-1');
const landscape2 = document.getElementById('landscape-2');

const landscapePara = document.getElementById('landscape-para');

const parameters = new URLSearchParams(window.location.search);

const nature = findById(parameters.get('id'), landscapesArray);


landscapeName.textContent = nature.name;
landscapeImage.src = `../assets/${nature.name}.jpg`;
landscape1.src = `.${nature.photos[1]}`;
landscape2.src = `.${nature.photos[2]}`;
landscapePara.textContent = `${nature.shyEnjoyment}`;