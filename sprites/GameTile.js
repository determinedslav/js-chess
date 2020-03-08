var GameTile = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.x;
	this.col = constructorConfig.col;
	this.y;
	this.playerColor = constructorConfig.playerColor;
	this.gameTileColor = constructorConfig.gameTileColor;
	this.side = GameConfig.TILE_SIZE.GAME_TILE;
	this.isSelected = false;
}

GameTile.prototype.contains = function(constructorConfig) {
	return ((constructorConfig.tileX < constructorConfig.x + 10) 
		&& (constructorConfig.x - 10 <= constructorConfig.tileX + this.side)) 
		&& ((constructorConfig.tileY < constructorConfig.y + 10) 
		&& (constructorConfig.y - 10 <= constructorConfig.tileY + this.side));
};

GameTile.prototype.move = function(row, col){
	this.row = row;
	this.col = col; 
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
