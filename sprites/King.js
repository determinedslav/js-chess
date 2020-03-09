var King = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
	this.gameTileColor = GameConfig.COLOR.KING;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

King.prototype.move = function(row, col) {
    if ((this.row == row + 1 && this.col == col)||
        (this.row == row - 1 && this.col == col)||
        (this.row == row && this.col == col + 1)||
        (this.row == row && this.col == col - 1)) {
        this.row = row;
        this.col = col; 
        this.gameTileReference.move(this.row, this.col);
        return true;
    }
    return false;
};

King.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

King.prototype.render = function(context) {
    this.gameTileReference.render(context);
};