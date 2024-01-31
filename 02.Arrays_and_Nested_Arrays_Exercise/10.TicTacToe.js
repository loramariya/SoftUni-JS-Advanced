function TicTacToe(input) {
    function printMatrix() {
        for (let row = 0; row < dashboard.length; row++) {

            console.log(dashboard[row].join("\t"));
        }
    }
    const dashboard = new Array(3).fill().map(() => new Array(3).fill(false));
    let player = "X";

    for (const line of input) {
        const [row, col] = line.split(' ').map((e) => Number(e));

        if (dashboard[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        dashboard[row][col] = player;

        for (let i = 0; i < 3; i++) {
            if (
                (dashboard[i][0] == player &&
                    dashboard[i][1] == player &&
                    dashboard[i][2] == player) ||
                (dashboard[0][i] == player &&
                    dashboard[1][i] == player &&
                    dashboard[2][i] == player)
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
            if (
                (dashboard[0][0] == player &&
                    dashboard[1][1] == player &&
                    dashboard[2][2] == player) ||
                (dashboard[0][2] == player &&
                    dashboard[1][1] == player &&
                    dashboard[2][0] == player)
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }

            let includesFalse = false;

            for (let row = 0; row < dashboard.length; row++) {

                if (dashboard[row].includes(false)) {
                    includesFalse = true;
                }
            }
            if (!includesFalse) {
                console.log("The game ended! Nobody wins :(");
                printMatrix();
                return;
            }

            player = player === "X" ? "O" : "X";
        }
    }
}


TicTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])