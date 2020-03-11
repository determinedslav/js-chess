var King = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.KING;
    this.type = GameConfig.FIGURES.TYPES.KING;
    this.points = GameConfig.FIGURES.POINTS.KING;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor,
        type : this.type,
        points : this.points,
    });
}

King.prototype.showActions = function(boardTile, gameTileCollection){
    if ((this.row == boardTile.row + 1 && this.col == boardTile.col)||
        (this.row == boardTile.row - 1 && this.col == boardTile.col)||
        (this.row == boardTile.row && this.col == boardTile.col + 1)||
        (this.row == boardTile.row && this.col == boardTile.col - 1)) {
        return this.gameTileReference.showActions(boardTile, gameTileCollection)
    } else {
        return boardTile.color;
    }
};

King.prototype.move = function(boardTile) {
    if (this.gameTileReference.move(boardTile)) {
        this.row = this.gameTileReference.row;
        this.col = this.gameTileReference.col;
        return true;
    } 
};

King.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

King.prototype.render = function(context) {
    this.gameTileReference.render(context);
};