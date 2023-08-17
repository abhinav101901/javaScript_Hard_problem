/*Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.*/


function solveSudoku(board) {
    if (solve(0, 0)) {
        return board;
    }
    
    function solve(row, col) {
        if (row === 9) {
            row = 0;
            col++;
            if (col === 9) {
                return true;
            }
        }
        
        if (board[row][col] !== '.') {
            return solve(row + 1, col);
        }
        
        for (let num = '1'; num <= '9'; num++) {
            if (isValid(row, col, num)) {
                board[row][col] = num;
                if (solve(row + 1, col)) {
                    return true;
                }
                board[row][col] = '.';
            }
        }
        
        return false;
    }
    
    function isValid(row, col, num) {
        const blockRowStart = Math.floor(row / 3) * 3;
        const blockColStart = Math.floor(col / 3) * 3;
        
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || 
                board[i][col] === num || 
                board[blockRowStart + Math.floor(i / 3)][blockColStart + (i % 3)] === num) {
                return false;
            }
        }
        
        return true;
    }
}

// Example Sudoku puzzle
const sudokuBoard = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(sudokuBoard);

for (let row of sudokuBoard) {
    console.log(row.join(' '));
}
