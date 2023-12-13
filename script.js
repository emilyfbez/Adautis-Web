document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        showResults(category);
    } else {
        window.location.href = 'categorias.html';
    }
});

function showResults(category) {
    const games = getGamesByCategory(category);
    document.getElementById('category').innerText = category;

    const gameList = document.getElementById('gameList');
    gameList.innerHTML = '';

    games.forEach(game => {
        const gameName = document.createElement('span');
        gameName.innerText = game;
        gameName.className = 'gameCardName';

        const gameCard = document.createElement('div');
        gameCard.className = 'gameCard';
        gameCard.appendChild(gameName);

        // Adicionar evento de clique ao card
        gameCard.addEventListener('click', function () {
            redirectToGamePage(game);
        });

        gameList.appendChild(gameCard);
    });

    return gameList;
}

function redirectToGamePage(game) {
    // Redirecionar para jogo.html com o parâmetro do jogo selecionado
    window.location.href = `jogo.html?game=${encodeURIComponent(game)}`;
}

function getGamesByCategory(category) {
    switch (category) {
        case 'MEMÓRIA':
            return ['Jogo 1', 'Jogo 2', 'Jogo 3'];
        case 'PERGUNTAS E RESPOSTAS':
            return ['Jogo 4', 'Jogo 5', 'Jogo 6'];
        case 'QUEBRA-CABEÇA':
            return ['Jogo 7', 'Jogo 8', 'Jogo 9'];
        case 'COMBINE OS PARES':
            return ['Jogo 10', 'Jogo 11', 'Jogo 12'];
        default:
            return [];
    }
}
