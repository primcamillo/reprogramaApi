const movies = document.querySelector('.movies');

const searchBox = document.getElementById('movie');

const botao = document.querySelector('button');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    movies.innerHTML = '';

fetch(`http://www.omdbapi.com/?s=${searchBox.value}&apikey=3e82cc16`)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        data.Search.forEach((catalog) => {
            const div1 = document.createElement('div');
            div1.setAttribute('class', 'box');
            div1.setAttribute('data-id', catalog.imdbID);
            movies.appendChild(div1);

            const cartaz = document.createElement('img');
            cartaz.setAttribute('src', catalog.Poster);
            div1.appendChild(cartaz);

            const titulo = document.createElement('div');
            titulo.setAttribute('class', 'box-divider');
            div1.appendChild(titulo);
        
            const parag = document.createElement('p');
            titulo.appendChild(parag);
        
            const movName = document.createElement('span');
            movName.textContent = catalog.Title;
            parag.appendChild(movName);
    
            const movYear = document.createElement('span');
            movYear.textContent = ` (${catalog.Year})`;
            parag.appendChild(movYear);
    
            const typeMovSer = document.createElement('p');
            typeMovSer.textContent = catalog.Type;
            titulo.appendChild(typeMovSer);

        })
    })

    .catch((erro) => {
        console.log(erro);
    })

})