// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { landscapesArray } from '../landscape-data.js';
import { renderLandscape } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="landscape"><a href="/landscapes/?id=1"><h2>Forest</h2></a><img src="./assets/Forest.jpg"><p>Shy thinks this is a 10/10 spot to visit</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLandscape(landscapesArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
