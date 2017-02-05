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
    	
      	if(this.getWinner()!=null || this.isDraw() )
      	{
      		return true;
      	}
      	else
      		return false;

    }

    getWinner() {
    	/*if(this.matrix[0][0]=='x' && this.matrix[0][1]=='x' && this.matrix[0][2]=='x' ) return 'x';
    	if(this.matrix[0][0]=='x' && this.matrix[1][0]=='x' && this.matrix[2][0]=='x' ) return 'x';
    	if(this.matrix[0][0]=='x' && this.matrix[1][1]=='x' && this.matrix[2][2]=='x' ) return 'x';
    	if(this.matrix[0][2]=='x' && this.matrix[1][2]=='x' && this.matrix[2][2]=='x' ) return 'x';
    	if(this.matrix[0][1]=='x' && this.matrix[1][1]=='x' && this.matrix[2][1]=='x' ) return 'x';
    	if(this.matrix[2][0]=='x' && this.matrix[2][1]=='x' && this.matrix[2][2]=='x' ) return 'x';

    	if(this.matrix[0][0]=='o' && this.matrix[0][1]=='o' && this.matrix[0][2]=='o' ) return 'o';
    	if(this.matrix[0][0]=='o' && this.matrix[1][0]=='o' && this.matrix[2][0]=='o' ) return 'o';
    	if(this.matrix[0][0]=='o' && this.matrix[1][1]=='o' && this.matrix[2][2]=='o' ) return 'o';
    	if(this.matrix[0][2]=='o' && this.matrix[1][2]=='o' && this.matrix[2][2]=='o' ) return 'o';
    	if(this.matrix[0][1]=='o' && this.matrix[1][1]=='o' && this.matrix[2][1]=='o' ) return 'o';
    	if(this.matrix[2][0]=='o' && this.matrix[2][1]=='o' && this.matrix[2][2]=='o' ) return 'o';
    
    	return null;
    
    */
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
    if(noMoreTurns())
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
