let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        document.getElementById('status').textContent = 'It\'s a draw!';
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}
