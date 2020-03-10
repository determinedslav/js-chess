var Knight = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.KNIGHT;
    this.type = GameConfig.FIGURES.TYPES.KNIGHT;
    this.points = GameConfig.FIGURES.POINTS.SPECIAL;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

Knight.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

Knight.prototype.move = function(row, col) {
    if ((this.row == row - 1 && this.col == col - 2) ||
        (this.row == row + 1 && this.col == col - 2) ||
        (this.row == row - 1 && this.col == col + 2) ||
        (this.row == row + 1 && this.col == col + 2) ||
        (this.row == row - 2 && this.col == col - 1) ||
        (this.row == row + 2 && this.col == col - 1) ||
        (this.row == row - 2 && this.col == col + 1) ||
        (this.row == row + 2 && this.col == col + 1))  {
        this.row = row;
        this.col = col; 
        this.gameTileReference.move(this.row, this.col);
        return true;
    }
    return false;
};

Knight.prototype.render = function(context) {
    this.gameTileReference.render(context);
};