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
        gameTileColor : this.gameTileColor,
        type : this.type,
        points : this.points,
    });
}

Knight.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

Knight.prototype.showActions = function(boardTile, gameTileCollection){
    if ((this.row == boardTile.row - 1 && this.col == boardTile.col - 2) ||
        (this.row == boardTile.row + 1 && this.col == boardTile.col - 2) ||
        (this.row == boardTile.row - 1 && this.col == boardTile.col + 2) ||
        (this.row == boardTile.row + 1 && this.col == boardTile.col + 2) ||
        (this.row == boardTile.row - 2 && this.col == boardTile.col - 1) ||
        (this.row == boardTile.row + 2 && this.col == boardTile.col - 1) ||
        (this.row == boardTile.row - 2 && this.col == boardTile.col + 1) ||
        (this.row == boardTile.row + 2 && this.col == boardTile.col + 1))  {
        return this.gameTileReference.showActions(boardTile, gameTileCollection)
    } else {
        return boardTile.color;
    }
};

Knight.prototype.move = function(boardTile) {
    if (this.gameTileReference.move(boardTile)) {
        this.row = this.gameTileReference.row;
        this.col = this.gameTileReference.col;
        return true;
    }
    
};

Knight.prototype.render = function(context) {
    this.gameTileReference.render(context);
};