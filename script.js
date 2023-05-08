const zoomIn = document.querySelector('.zoom-in');
const zoomOut = document.querySelector('.zoom-out');
const buttonLine = document.querySelector('.line button');
const pokemonDetail = document.querySelector('.pokemon-detail');


function calculateCurrentImageSize() {
    return parseInt(pokemonDetail.style.width.split('px')[0]) || 200;
}

function calculateCurrentPositionButton() {
    return parseInt(buttonLine.style.left.split('px')[0]) || 0;
}

zoomOut.onclick = () => {
    const newSize = calculateCurrentImageSize() - 10;
    const newPosition = calculateCurrentPositionButton() - 10;

    if (newSize <= 200 && newPosition <= 0) {
        buttonLine.style.left = '0px'
        return
    }

    pokemonDetail.style.width = `${newSize}px`;
    buttonLine.style.left = `${newPosition}px`;
}

zoomIn.onclick = () => {
    const newSize = calculateCurrentImageSize() + 10;
    const newPosition = calculateCurrentPositionButton() + 10;

    if (newSize >= 400 || newPosition >= 190) {
        buttonLine.style.left = '185px';
        return
    }

    pokemonDetail.style.width = `${newSize}px`;
    buttonLine.style.left = `${newPosition}px`;
}