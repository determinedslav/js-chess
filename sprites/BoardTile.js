var BoardTile = function(constructorConfig) {
	this.row = constructorConfig.row;
	this.x;
	this.col = constructorConfig.col;
	this.y;
	this.color = constructorConfig.color;
	this.side = GameConfig.TILE_SIZE.BOARD_TILE;
}

BoardTile.prototype.contains = function(constructorConfig) {
	return ((constructorConfig.tileX < constructorConfig.x) 
		&& (constructorConfig.x <= constructorConfig.tileX + this.side)) 
		&& ((constructorConfig.tileY < constructorConfig.y) 
		&& (constructorConfig.y <= constructorConfig.tileY + this.side));
};

BoardTile.prototype.render = function(context) {

	this.x = this.row * GameConfig.TILE_SIZE.BOARD_TILE;
	this.y = this.col * GameConfig.TILE_SIZE.BOARD_TILE;

	context.beginPath();
    context.rect(this.x, this.y, this.side, this.side)
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
}