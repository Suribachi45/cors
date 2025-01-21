const searchButton = document.getElementById('searchButton');
const characterInfo = document.getElementById('characterInfo');

searchButton.addEventListener('click', () => {
    const characterName = document.getElementById('characterSearch').value;
    const url = `http://localhost:3000/characters/${characterName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            characterInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Status: ${data.status}</p>
                <p>Species: ${data.species}</p>
                <p>Gender: ${data.gender}</p>
                <p>Origin: ${data.origin.name}</p>
                <img src="${data.image}" alt="${data.name}">
            `;
        })
        .catch(error => {
            characterInfo.innerHTML = 'Personaje no encontrado';
        });
});