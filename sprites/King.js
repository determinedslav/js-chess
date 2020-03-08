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

King.prototype.render = function(context) {
    this.gameTileReference.render(context);
};

King.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};