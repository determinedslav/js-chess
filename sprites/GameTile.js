var GameTile = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.x;
	this.col = constructorConfig.col;
	this.y;
	this.playerColor = constructorConfig.playerColor;
	this.gameTileColor = constructorConfig.gameTileColor;
	this.type = constructorConfig.type;
	this.points = constructorConfig.points;
	this.side = GameConfig.TILE_SIZE.GAME_TILE;
}

GameTile.prototype.contains = function(constructorConfig) {
	return ((constructorConfig.tileX < constructorConfig.x + 10) 
		&& (constructorConfig.x - 10 <= constructorConfig.tileX + this.side)) 
		&& ((constructorConfig.tileY < constructorConfig.y + 10) 
		&& (constructorConfig.y - 10 <= constructorConfig.tileY + this.side));
};

GameTile.prototype.showActions = function(boardTile, gameTileCollection){
	for(var i = 0; i < gameTileCollection.length; i++) {
		if (boardTile.row == gameTileCollection[i].row && boardTile.col == gameTileCollection[i].col){
			if (this.playerColor != gameTileCollection[i].playerColor){
				return GameConfig.COLOR.BOARD.ENEMY;
			} else {
				return boardTile.color;
			}
		}
	}
	return GameConfig.COLOR.BOARD.MOVE;
}

GameTile.prototype.move = function(boardTile){
	if (boardTile.color == GameConfig.COLOR.BOARD.MOVE || boardTile.color == GameConfig.COLOR.BOARD.ENEMY) {
        this.row = boardTile.row;
        this.col = boardTile.col;
        return true;
    }
    return false; 
}

GameTile.prototype.render = function(context) {
	
	this.x = (this.row * GameConfig.TILE_SIZE.BOARD_TILE) + 10;
	this.y = (this.col * GameConfig.TILE_SIZE.BOARD_TILE) + 10;

	context.beginPath();
    context.rect(this.x, this.y, this.side, this.side)
    context.fillStyle = this.playerColor;
    context.fill();
	context.strokeStyle = this.gameTileColor;
	context.lineWidth = 5;
	context.stroke();
    context.closePath();
}
