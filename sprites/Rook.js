var Rook = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.ROOK;
    this.type = GameConfig.FIGURES.TYPES.ROOK;
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

Rook.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

Rook.prototype.showActions = function(boardTile, gameTileCollection){
    if (this.row == boardTile.row || this.col == boardTile.col) {
        return this.gameTileReference.showActions(boardTile, gameTileCollection)
    } else {
        return boardTile.color;
    }
}

Rook.prototype.move = function(boardTile) {
    if (this.gameTileReference.move(boardTile)) {
        this.row = this.gameTileReference.row;
        this.col = this.gameTileReference.col;
        return true;
    }
    
};

Rook.prototype.render = function(context) {
    this.gameTileReference.render(context);
};
