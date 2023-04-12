const form = document.getElementById('task6-form');

const page = document.getElementById('page');
const limit = document.getElementById('limit');

const button = document.querySelector('button');
const formValidator = document.querySelector('.form-validator');
const picturesList = document.querySelector('.pictures');
const picturesFromStore = localStorage.getItem('pictures');

if (picturesFromStore) {
    renderPicrutes(JSON.parse(picturesFromStore));
}

button.addEventListener('click', event => {
    event.preventDefault();
    const isValidForm = checkFormValue();

    if (isValidForm) {
        getPictures(page.value, limit.value);
    }
});

function checkFormValue() {
    const checkFirst = checkInputValue(page);
    const checkSecond = checkInputValue(limit);
    
     if (checkFirst && checkSecond) {
        formValidator.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (checkFirst) {
        formValidator.innerText = 'Номер страницы вне диапазона от 1 до 10';
    } else if (checkSecond) {
        formValidator.innerText = 'Лимит вне диапазона от 1 до 10';
    } else {
        formValidator.innerText = null;
        return true;
    }
}

function checkInputValue(input) {
    return !Number.isNaN(+input.value) && (input.value < 1 || input.value > 10);
}

function getPictures(page, limit) {
    const requset = fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, { method: 'GET' })
    requset
        .then(res => res.json())
        .then(res => savePictures(res))
        .then(res => renderPicrutes(res))
}

function savePictures(pictures) {
    localStorage.setItem('pictures', JSON.stringify(pictures));

    return pictures;
}

function renderPicrutes(pictures) {
    if (!pictures.length) {
        return
    }

    picturesList.innerHTML = null;
    for (let picture of pictures) {
        console.log(picture);
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = picture.download_url;
        img.width = 800;
        img.height = 600;

        li.appendChild(img)
        picturesList.appendChild(li);
    }
}