function diagonalSum(matrix) {
    let main = 0;
    let secondary = 0;
    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
        secondary += matrix[i][matrix.length - 1 - i];
    }
    console.log(main,secondary)
}

diagonalSum([[20, 40],
[10, 60]])
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])