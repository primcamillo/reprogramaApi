const stickers = document.querySelector('.stickers');
const search = document.getElementById('sticker');

const botao = document.querySelector('button');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    stickers.innerHTML = '';

fetch(`https://api.giphy.com/v1/stickers/search?q=${search.value}&api_key=xxNazzwzvZDL6cmUyrRxPIY0stdyDqr3`)
    .then((response) => {
        return response.json()
    })

    .then((data) => {
        data.data.forEach((figuras) => {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('data-id', figuras.id);
            stickers.appendChild(box);

            const gif = document.createElement('img');
            gif.setAttribute('src', figuras.images.fixed_height.url);
            box.appendChild(gif);
        })
    })

    .catch((erro) => {
        console.log(erro);
    })
})