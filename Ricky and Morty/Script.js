document.addEventListener('DOMContentLoaded', function () {
    const rickMortyInput = document.getElementById('rickMortyInput');
    const fetchPersonagemButton = document.getElementById('fetchPersonagemButton');
    const personagemDetails = document.getElementById('personagemDetails');

    fetchPersonagemButton.addEventListener('click', function () {
        const nameOrId = rickMortyInput.value.trim().toLowerCase();
        if (nameOrId === '') {
            alert('Por favor, digite o nome ou ID do personagem.');
            return;
        }

        // Limpa o conteúdo atual
        personagemDetails.innerHTML = 'Carregando...';

        // Faz a requisição para a API do Rick and Morty
        fetch(`https://rickandmortyapi.com/api/character/${nameOrId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Personagem não encontrado');
                }
                return response.json();
            })
            .then(data => {
                // Extrai os dados necessários
                const { name, id, species, gender, image } = data;
                const personagemName = name.charAt(0).toUpperCase() + name.slice(1);
                const personagemId = id;
                const personagemSpecies = species;
                const personagemGender = gender;
                const personagemImage = image;

 

                // Atualiza o HTML com os dados do personagem
                personagemDetails.innerHTML = `
                    <h2>${personagemName} (#${personagemId})</h2>
                    <p>Espécie: ${personagemSpecies}</p>
                    <p>Gênero: ${personagemGender}</p>
                    <img src="${personagemImage}" alt="${personagemName}" />
                `;
            })
            .catch(error => {
                // Trata erros
                personagemDetails.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
