export function renderLandscape(landscape) {
    const landscapeDiv = document.createElement('div');
    landscapeDiv.classList.add('landscape');

    const landscapeA = document.createElement('a');
    landscapeA.href = `/landscapes/?id=${landscape.id}`;

    const landscapeH2 = document.createElement('h2');
    landscapeH2.textContent = landscape.name;

    const landscapeImg = document.createElement('img');
    landscapeImg.src = `./assets/${landscape.name}.jpg`;
        

    const landscapeP = document.createElement('p');
    landscapeP.textContent = `${landscape.details}`;

    landscapeA.append(landscapeH2, landscapeImg);
    landscapeDiv.append(landscapeA, landscapeP);
    return landscapeDiv;
}

export function findById(id, arr) {
    return arr.find((item) => item.id === id);
}