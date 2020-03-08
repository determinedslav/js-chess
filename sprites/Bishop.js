var Bishop = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
	this.gameTileColor = GameConfig.COLOR.BISHOP;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

Bishop.prototype.render = function(context) {
    this.gameTileReference.render(context);
};

Bishop.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};