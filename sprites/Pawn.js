var Pawn = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.PAWN;
    this.type = GameConfig.FIGURES.TYPES.PAWN;
    this.points = GameConfig.FIGURES.POINTS.COMMON;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

Pawn.prototype.move = function(row, col) {
    if ((this.row == row && this.col == col + 1 && this.playerColor == GameConfig.COLOR.PLAYER_WHITE)||
        (this.row == row && this.col == col - 1 && this.playerColor == GameConfig.COLOR.PLAYER_BLACK)) {
        this.row = row;
        this.col = col; 
        this.gameTileReference.move(this.row, this.col);
        return true;
    }
    return false;
};

Pawn.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

Pawn.prototype.render = function(context) {
    this.gameTileReference.render(context);
};
