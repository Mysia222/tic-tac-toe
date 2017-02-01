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
    	 if (this.getFieldValue(rowIndex, columnIndex) === '') {
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
        for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.matrix[i][j] === '') 
          	return false;
        }
      }
      return true;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    	return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
