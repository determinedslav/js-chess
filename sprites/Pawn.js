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
        gameTileColor : this.gameTileColor,
        type : this.type,
        points : this.points,
    });
}

Pawn.prototype.showActions = function(boardTile, gameTileCollection){
    if ((this.row == boardTile.row && this.col == boardTile.col + 1 && this.playerColor == GameConfig.COLOR.PLAYER_WHITE)||
        (this.row == boardTile.row && this.col == boardTile.col - 1 && this.playerColor == GameConfig.COLOR.PLAYER_BLACK)) {
        for(var i = 0; i < gameTileCollection.length; i++) {
            if (boardTile.row == gameTileCollection[i].row && boardTile.col == gameTileCollection[i].col){
                return boardTile.color;
            }
        }
        return GameConfig.COLOR.BOARD.MOVE;
    } else if   ((this.row + 1 == boardTile.row && this.col == boardTile.col + 1 && this.playerColor == GameConfig.COLOR.PLAYER_WHITE)||
                (this.row - 1 == boardTile.row && this.col == boardTile.col + 1 && this.playerColor == GameConfig.COLOR.PLAYER_WHITE)||
                (this.row + 1 == boardTile.row && this.col == boardTile.col - 1 && this.playerColor == GameConfig.COLOR.PLAYER_BLACK)||
                (this.row - 1 == boardTile.row && this.col == boardTile.col - 1 && this.playerColor == GameConfig.COLOR.PLAYER_BLACK)) {
        for(var i = 0; i < gameTileCollection.length; i++) {
            if (boardTile.row == gameTileCollection[i].row && boardTile.col == gameTileCollection[i].col){
                if (this.playerColor != gameTileCollection[i].playerColor){
                    return GameConfig.COLOR.BOARD.ENEMY;
                } else {
                    return boardTile.color;
                }
            }
        }
        return boardTile.color;
    } else {
        return boardTile.color;
    }
};

Pawn.prototype.move = function(boardTile) {
    if (this.gameTileReference.move(boardTile)) {
        this.row = this.gameTileReference.row;
        this.col = this.gameTileReference.col;
        return true;
    } 
};

Pawn.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};

Pawn.prototype.render = function(context) {
    this.gameTileReference.render(context);
};
