const boxes = document.querySelectorAll('.box');
const message = document.getElementById('message');
const result = document.getElementById('result');
const restartButton = document.getElementById('button');

let currentPlayer = 'X';

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (!box.textContent && !result.style.visibility) {
            box.textContent = currentPlayer;

            if (checkWinner(currentPlayer)) {
                message.innerText = currentPlayer + " Won";
                result.style.visibility = "visible";
                return;
            } else if (checkDraw()) {
                message.innerText = "It's a draw!";
                result.style.visibility = "visible";
                return;
            }

            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        }
    });
});

restartButton.addEventListener('click', () => {
    resetGame();
});

function checkWinner(player) {
    const winningCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winningCombos.some(combo => {
        return combo.every(cell => {
            const box = document.getElementById(cell.toString());
            return box.textContent == player;
        });
    });
}

function checkDraw() {
    return [...boxes].every(box => box.textContent != ''); 
}

function resetGame() {
    boxes.forEach(box => {
        box.textContent = '';
    });
    currentPlayer = 'X';
    result.style.visibility = "hidden";
}
