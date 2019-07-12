    const authors = document.querySelector('.authors');

    fetch('https://reqres.in/api/users', {
        method: 'GET'
    })
      
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        data.data.forEach((pessoas) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', pessoas.id);
            authors.appendChild(card);

            const name = document.createElement('h2');
            name.textContent = `${pessoas.first_name} ${pessoas.last_name}`;
            card.appendChild(name);

            const email = document.createElement('p');
            email.textContent = pessoas.email;
            card.appendChild(email);

            const botao = document.createElement('button');
            botao.setAttribute('data-id', pessoas.id);
            botao.textContent = 'x';
            card.appendChild(botao);

            botao.addEventListener('click', () => {
                const thisCard = botao.parentElement;
                const cardPai = thisCard.parentElement;

                fetch('https://reqres.in/api/users', {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'id': botao.getAttribute('data-id')
                    })
                })

                .then(() => {
                    cardPai.removeChild(thisCard);
                })
              
                .catch((erro) => {
                    console.log(erro);
                })
            })
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
