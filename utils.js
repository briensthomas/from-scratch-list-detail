export function renderLandscape(landscape) {
    const landscapeDiv = document.createElement('div');
    landscapeDiv.classList.add('landscape');

    const landscapeH2 = document.createElement('h2');
    landscapeH2.textContent = landscape.name;

    const landscapeImg = document.createElement('img');
    landscapeImg.src = `./assets/${landscape.name}.jpg`;

    const landscapeP = document.createElement('p');
    landscapeP.textContent = `Shy thinks this is a ${landscape.shyEnjoyment} spot to visit`;

    landscapeDiv.append(landscapeH2, landscapeImg, landscapeP);
    return landscapeDiv;
}