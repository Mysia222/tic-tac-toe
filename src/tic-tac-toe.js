class TicTacToe {
    constructor() {
this.matrix=[
  ['','',''],
  ['','',''],
  ['','',''],
];
//this.rowIndex='';
//this.colIndex='';
this.play='x';
    }

    getCurrentPlayerSymbol() {

return this.play;
    }

    nextTurn(rowIndex, columnIndex) {
    	 if (this.getFieldValue(rowIndex, columnIndex) === null) {
        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
     	if(this.play==='x')
     		this.play='o';
     	if(this.play==='o')
     		this.play='x';
     }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    	return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;

