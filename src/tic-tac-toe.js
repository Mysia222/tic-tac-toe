class TicTacToe {
    constructor() {
this.matrix=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

this.player='x';
    }

    getCurrentPlayerSymbol() {

return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
    	if (this.getFieldValue(rowIndex, columnIndex) == null) 
    	{
       this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
     	if(this.player=='x')
     	this.player ='o';
 else
     	this.player ='x';
     }
     else
     	return this;
    }

    isFinished() {
    	
      	if(this.getWinner()!=null || this.noMoreTurns() == true)
      	{
      		return true;
      	}
      	else
      		return false;

    }

    getWinner() {
    	
    	 if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1] === this.matrix[0][2]) 
    	 	return this.matrix[0][2];
      if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2]) 
      	return this.matrix[1][2];
      if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1] === this.matrix[2][2]) 
      	return this.matrix[2][2];
      if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0] === this.matrix[2][0]) 
      	return this.matrix[2][0];
      if ( this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1]) 
      	return this.matrix[2][1];
      if ( this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2]) 
      	return this.matrix[2][2];
      if ( this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2])
       return this.matrix[2][2];
      if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) 
      	return this.matrix[2][0];

      return null;
    
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.matrix[i][j] === null) 
          	return false;
        }
      }
      return true;
    }

    isDraw() {
    if(this.noMoreTurns() || this.getWinner() == null)
    	return true;
    else
    	return false;
    }

    getFieldValue(rowIndex, colIndex) {
	
    if(rowIndex<3 && colIndex<3)
    		return this.matrix[rowIndex][colIndex];
    else 
    	return null;
}

}

module.exports = TicTacToe;
