var Bishop = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.col = constructorConfig.col;
	this.playerColor = constructorConfig.playerColor;
    this.gameTileColor = GameConfig.COLOR.BISHOP;
    this.type = GameConfig.FIGURES.TYPES.BISHOP;
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

Bishop.prototype.render = function(context) {
    this.gameTileReference.render(context);
};

Bishop.prototype.contains = function(x, y) {
    return this.gameTileReference.contains(x, y);
};