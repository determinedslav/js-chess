var Queen = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.QUEEN;
    this.type = GameConfig.FIGURES.TYPES.QUEEN;
    this.points = GameConfig.FIGURES.POINTS.QUEEN;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor,
        type : this.type,
        points : this.points,
    });
}

Queen.prototype.showActions = function(boardTile, gameTileCollection){
    if ((this.row - this.col) == (boardTile.row - boardTile.col) || 
        (this.row + this.col) == (boardTile.row + boardTile.col) || 
        this.row == boardTile.row || this.col == boardTile.col) {
        return this.gameTileReference.showActions(boardTile, gameTileCollection)
    } else {
        return boardTile.color;
    }
};

Queen.prototype.move = function(boardTile) {
    if (this.gameTileReference.move(boardTile)) {
        this.row = this.gameTileReference.row;
        this.col = this.gameTileReference.col;
        return true;
    }
    
};

Queen.prototype.render = function(context) {
    this.gameTileReference.render(context);
};

Queen.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};