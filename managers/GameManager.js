var GameManager = {};

GameManager.init = function(canvas) {

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
	this.boardTileCollection = [];
	this.gameTileCollection = [];
	this.boardTileSelected = null;
	this.gameTileSelected = null;
	this.gameTurn = 0;
	this.loadBoard();
	this.loadGameTiles();
    this.render();
};

GameManager.loadBoard = function () {
	console.log("loading board")
	this.boardTileCollection = [];
	var tileColorInstance = null;
	
	for (var i = 0; i < GameConfig.BOARD_SIZE.BOARD_SIDE; i++){
		for (var j = 0; j < 10; j++) {
			var tileColorInstance = GameConfig.COLOR.BOARD.BLACK;
			if (i%2 == 1) {
				if (j%2 == 1) {
					tileColorInstance = GameConfig.COLOR.BOARD.WHITE;
				}
			} else if (j%2 == 0) {
				tileColorInstance = GameConfig.COLOR.BOARD.WHITE;
			} else {
				tileColorInstance = GameConfig.COLOR.BOARD.BLACK;
			}
			var boardTileInstance = new BoardTile({
			row: j,
			col: i,
			color : tileColorInstance,
			});
		this.boardTileCollection.push(boardTileInstance);
		};
	};
};

GameManager.renderBoard = function () {
	for (var i = 0; i < this.boardTileCollection.length; i++){
		this.boardTileCollection[i].render(this.context);
	};
};

GameManager.loadGameTiles = function () {
	//test
	console.log("loading tiles")
	
	var rook = new Rook({
		row: 0,
		col: 0,
		playerColor : GameConfig.COLOR.PLAYER_BLACK
	})
	this.gameTileCollection.push(rook);
	var rook = new Rook({
		row: 0,
		col: 9,
		playerColor : GameConfig.COLOR.PLAYER_WHITE
	})
	this.gameTileCollection.push(rook);
	
	var knight = new Knight({
		row: 1,
		col: 0,
		playerColor : GameConfig.COLOR.PLAYER_BLACK
	})
	this.gameTileCollection.push(knight);
	var knight = new Knight({
		row: 1,
		col: 9,
		playerColor : GameConfig.COLOR.PLAYER_WHITE
	})
	this.gameTileCollection.push(knight);
	
	var bishop = new Bishop({
		row: 2,
		col: 0,
		playerColor : GameConfig.COLOR.PLAYER_BLACK
	})
	this.gameTileCollection.push(bishop);
	var bishop = new Bishop({
		row: 2,
		col: 9,
		playerColor : GameConfig.COLOR.PLAYER_WHITE
	})
	this.gameTileCollection.push(bishop);
	
	var king = new King({
		row: 3,
		col: 0,
		playerColor : GameConfig.COLOR.PLAYER_BLACK
	})
	this.gameTileCollection.push(king);
	var king = new King({
		row: 3,
		col: 9,
		playerColor : GameConfig.COLOR.PLAYER_WHITE
	})
	this.gameTileCollection.push(king);
	
	var queen = new Queen({
		row: 4,
		col: 0,
		playerColor : GameConfig.COLOR.PLAYER_BLACK
	})
	this.gameTileCollection.push(queen);
	var queen = new Queen({
		row: 4,
		col: 9,
		playerColor : GameConfig.COLOR.PLAYER_WHITE
	})
	this.gameTileCollection.push(queen);
	
	for (var i = 0; i < 5; i++) {
		var pawn = new Pawn({
			row: i,
			col: 1,
			playerColor : GameConfig.COLOR.PLAYER_BLACK
		})
		this.gameTileCollection.push(pawn);
	}	
	for (var i = 0; i < 5; i++) {
		var pawn = new Pawn({
			row: i,
			col: 8,
			playerColor : GameConfig.COLOR.PLAYER_WHITE
		})
		this.gameTileCollection.push(pawn);
	}
	//end test
};

GameManager.renderGameTiles = function() {
	console.log("rendering tiles")
	console.log(this.gameTileCollection);
	for (var i = 0; i < this.gameTileCollection.length; i++){
		this.gameTileCollection[i].render(this.context);
	};
};

GameManager.mouseClick = function(clientX, clientY) {

	console.log ("click");

	var x = clientX - 10;
	var y = clientY - 10;

	var isBoardTileOccupied = null;

	if (this.gameTileSelected != null){

		this.boardTileSelected = this.selectBoardTile(x, y);
		var boardTileRow = this.boardTileSelected.row;
		var boardTileCol = this.boardTileSelected.col;

		isBoardTileOccupied = this.selectGameTile(x, y);

		if (isBoardTileOccupied == null) {
			if (this.gameTileSelected.move(boardTileRow, boardTileCol)) {
				this.gameTurn++;
				this.refreshBoard();
			}
		} else {
			if (isBoardTileOccupied == this.gameTileSelected) {
				this.refreshBoard();
			} else if (isBoardTileOccupied.playerColor != this.gameTileSelected.playerColor) {
				if(this.gameTileSelected.move(boardTileRow, boardTileCol)) {
					for (var i = 0; i < this.gameTileCollection.length; i++) {
						if (this.gameTileCollection[i] == isBoardTileOccupied) {
							this.gameTileCollection.splice(i, 1);
							if (isBoardTileOccupied.type == GameConfig.FIGURE_TYPES.KING) {
								this.endGame(isBoardTileOccupied.playerColor);
							} 
						} 
					}
					this.gameTurn++;
					this.refreshBoard();
				}
			}
		}

	} else {
		this.gameTileSelected = this.selectGameTile(x, y);
		if (this.gameTileSelected != null && this.gameTileSelected.playerColor != this.getCurrentPlayer()) {
			this.boardTileSelected = this.selectBoardTile(x, y);
			this.boardTileSelected.color = "#FFCC11";
			this.render(this.context);
			console.log(this.gameTileSelected);	
		} else {
			this.refreshBoard();
		}
	}
};

GameManager.selectBoardTile = function(x, y) {
	for(var i = 0; i < this.boardTileCollection.length; i++) {
		var tileX = this.boardTileCollection[i].x;
		var tileY = this.boardTileCollection[i].y;
		if (this.boardTileCollection[i].contains({
			x : x,
			y : y,
			tileX : tileX,
			tileY : tileY
		})){
			return this.boardTileCollection[i];
		}
	}
};

GameManager.selectGameTile = function(x, y) {
	for(var i = 0; i < this.gameTileCollection.length; i++) {
		var tileX = this.gameTileCollection[i].gameTileReference.x;
		var tileY = this.gameTileCollection[i].gameTileReference.y;
		if (this.gameTileCollection[i].contains({
			x : x,
			y : y,
			tileX : tileX,
			tileY : tileY
		})){
			return this.gameTileCollection[i];
		}
	}
};

GameManager.endGame = function(player) {
	switch(player){
		case GameConfig.COLOR.PLAYER_BLACK:
			console.log("Nazi Wins!");
			break;
		case GameConfig.COLOR.PLAYER_WHITE:
			console.log("Nigga Wins!");
			break;
		default:
			console.log("Someone won but who?")
	}
}

GameManager.getCurrentPlayer = function(){
	if (this.gameTurn % 2 != 0){
		return GameConfig.COLOR.PLAYER_WHITE;
	} else {
		return GameConfig.COLOR.PLAYER_BLACK;
	}
}

GameManager.refreshBoard = function(){
	this.gameTileSelected = undefined;	
	this.loadBoard();
	this.render(this.context);
}

GameManager.render = function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.renderBoard();
	this.renderGameTiles();
};