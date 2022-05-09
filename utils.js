export function renderLandscape(landscape) {
    const landscapeDiv = document.createElement('div');
    landscapeDiv.classList.add('landscape');

    const landscapeA = document.createElement('a');
    landscapeA.href = `/Nature/?id=${landscape.id}`;

    const landscapeH2 = document.createElement('h2');
    landscapeH2.textContent = landscape.name;

    const landscapeImg = document.createElement('img');
    landscapeImg.src = `./assets/${landscape.name}.jpg`;

    const landscapeP = document.createElement('p');
    landscapeP.textContent = `Shy thinks this is a ${landscape.shyEnjoyment} spot to visit`;

    landscapeA.append(landscapeH2);
    landscapeDiv.append(landscapeA, landscapeImg, landscapeP);
    return landscapeDiv;
}