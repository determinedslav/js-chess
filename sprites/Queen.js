var Queen = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.QUEEN;
    this.type = GameConfig.FIGURE_TYPES.QUEEN;
	
	this.gameTileReference = new GameTile({
        row : this.row,
        col : this.col,
		playerColor : this.playerColor,
        gameTileColor : this.gameTileColor
    });
}

Queen.prototype.render = function(context) {
    this.gameTileReference.render(context);
};

Queen.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};