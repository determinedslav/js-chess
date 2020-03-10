var Rook = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.ROOK;
    this.type = GameConfig.FIGURE.TYPES.ROOK;
    this.points = GameConfig.FIGURES.POINTS.SPECIAL;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

Rook.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

Rook.prototype.move = function(row, col) {
    if (this.row == row || this.col == col) {
        this.row = row;
        this.col = col; 
        this.gameTileReference.move(this.row, this.col);
        return true;
    }
    return false;
};

Rook.prototype.render = function(context) {
    this.gameTileReference.render(context);
};
