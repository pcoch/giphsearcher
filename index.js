//onload, show new image
window.onload = () => {
    let searchQuery = document.getElementById('search').value;

    const img = document.querySelector('img');    


    async function getGiph() {

        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XTwdhedRaeuU3hRmyS7YeEcAmR62Y8EH&s=${searchQuery}`, {mode: 'cors'});
        const giphData = await response.json();
        img.src = (giphData.data.images.original.url);
        const loader = document.querySelector('.loader');
        loader.classList.add('hide');
    }
    getGiph();

//on btn click, show new image
const Btn = document.querySelector('.button');
Btn.addEventListener('click', generateGiph);

//on search click, show new image
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', searchGiph);
};

//show new image, on click   
    async function generateGiph() {

        const img = document.querySelector('img');    
        img.src = '';
    
        let searchQuery = document.getElementById('search').value;
    
        const loader = document.querySelector('.loader');
        loader.classList.remove('hide');
    
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XTwdhedRaeuU3hRmyS7YeEcAmR62Y8EH&s=${searchQuery}`, {mode: 'cors'});
        const giphData = await response.json();
        img.src = (giphData.data.images.original.url);
        loader.classList.add('hide');
    };

//show new image, on search
    async function searchGiph () {
        let searchQuery = document.getElementById('search').value;

        const img = document.querySelector('img');    
        img.src = '';
    
        const loader = document.querySelector('.loader');
        loader.classList.remove('hide');
    
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XTwdhedRaeuU3hRmyS7YeEcAmR62Y8EH&s=${searchQuery}`, {mode: 'cors'});
        const giphData = await response.json();
        img.src = (giphData.data.images.original.url);
        loader.classList.add('hide');        
    };
