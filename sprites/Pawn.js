var Pawn = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
	this.gameTileColor = GameConfig.COLOR.PAWN;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

Pawn.prototype.render = function(context) {
    this.gameTileReference.render(context);
};

Pawn.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};