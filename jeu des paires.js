let words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];
let board = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initGameBoard(size) {
    let boardSize = size * size;

    // Dupliquez chaque mot pour faire des paires
    words = words.slice(0, boardSize / 2).concat(words.slice(0, boardSize / 2));

    // Mélangez les mots
    shuffleArray(words);

    // Créez le tableau 2D
    for (let i = 0; i < size; i++) {
        board[i] = words.slice(i * size, (i + 1) * size);
    }
    
    return board;
}

function displayBoard(board) {
    for (let row of board) {
        console.log(row.map(word => word ? '??' : word).join(' '));
    }
}

function checkPair(board, choice1, choice2) {
    let [x1, y1] = choice1;
    let [x2, y2] = choice2;

    if (board[x1][y1] === board[x2][y2]) {
        console.log('Pair found!');
        board[x1][y1] = null;
        board[x2][y2] = null;
        return true;
    } else {
        console.log('Not a pair.');
        return false;
    }
}

// Exemple d'utilisation
let game= initGameBoard(4);
displayBoard(board);
// Le joueur sélectionne deux positions [x1, y1] et [x2, y2]
// checkPair(board, [x1, y1], [x2, y2]);
