//onload, show new image
window.onload = () => {
    let searchQuery = document.getElementById('search').value;

    const img = document.querySelector('img');    

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XTwdhedRaeuU3hRmyS7YeEcAmR62Y8EH&s=${searchQuery}`, {mode: 'cors'})
    .then(function(response) {
    return response.json();
        })
    .then(function(response) {
    img.src = (response.data.images.original.url);
    const loader = document.querySelector('.loader');
    loader.classList.add('hide');
        }).catch((error) => {
            console.error('Error:', error);
          });

//on btn click, show new image
const Btn = document.querySelector('.button');
Btn.addEventListener('click', generateGiph);

//on search click, show new image
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', searchGiph);
};

//show new image, on click
const generateGiph = () => {
    const img = document.querySelector('img');    
    img.src = '';

    let searchQuery = document.getElementById('search').value;

    const loader = document.querySelector('.loader');
    loader.classList.remove('hide');

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XTwdhedRaeuU3hRmyS7YeEcAmR62Y8EH&s=${searchQuery}`, {mode: 'cors'})
    .then(function(response) {
    return response.json();
        })
    .then(function(response) {
    img.src = (response.data.images.original.url);
    loader.classList.add('hide');
        }).catch((error) => {
            console.error('Error:', error);
          });
};


//show new image, on search
const searchGiph = () => {

    let searchQuery = document.getElementById('search').value;

    const img = document.querySelector('img');    
    img.src = '';

    const loader = document.querySelector('.loader');
    loader.classList.remove('hide');

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XTwdhedRaeuU3hRmyS7YeEcAmR62Y8EH&s=${searchQuery}`, {mode: 'cors'})
    .then(function(response) {
    return response.json();
        })
    .then(function(response) {
    img.src = (response.data.images.original.url);
    loader.classList.add('hide');
        }).catch((error) => {
            console.error('Error:', error);
          });
};




