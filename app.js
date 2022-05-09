// import functions and grab DOM elements
import { landscapesArray } from './landscape-data.js';

import { renderLandscape } from './utils.js';

const landscapesListEl = document.getElementById('landscapes-list');
// let state
for (let landscape of landscapesArray) {
    const landscapeDiv = renderLandscape(landscape);
    landscapesListEl.append(landscapeDiv);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
