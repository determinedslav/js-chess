var GameManager = {};

GameManager.init = function(canvas) {

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
	this.boardTileCollection = [];
	this.gameTileCollection = [];
	this.boardTileSelected = null;
	this.gameTileSelected = null;
	this.gameTurn = 0;
	this.whitePlayerScore = 0;
	this.blackPlayerScore = 0;
	this.loadBoard();
	this.loadGameTiles();
    this.render();
};

GameManager.loadBoard = function () {
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
		var pawn = new Pawn({
			row: i,
			col: 8,
			playerColor : GameConfig.COLOR.PLAYER_WHITE
		})
		this.gameTileCollection.push(pawn);
	}	
};

GameManager.renderGameTiles = function() {
	for (var i = 0; i < this.gameTileCollection.length; i++){
		this.gameTileCollection[i].render(this.context);
	};
};

GameManager.mouseClick = function(clientX, clientY) {

	console.log ("click");

	var currentPlayer = this.getCurrentPlayer();

	var x = clientX - 10;
	var y = clientY - 10;

	var boardTileOccupied = null;

	if (this.gameTileSelected != null){

		this.boardTileSelected = this.selectBoardTile(x, y);
		var boardTileRow = this.boardTileSelected.row;
		var boardTileCol = this.boardTileSelected.col;

		boardTileOccupied = this.selectGameTile(x, y);

		if (boardTileOccupied == null) {
			if (this.gameTileSelected.move(this.boardTileSelected)) {
				this.gameTurn++;
				this.refreshBoard();
			}
		} else {
			if (boardTileOccupied == this.gameTileSelected) {
				this.refreshBoard();
			} else if (boardTileOccupied.playerColor != this.gameTileSelected.playerColor) {
				if(this.gameTileSelected.move(this.boardTileSelected)) {
					this.takePiece(boardTileOccupied, currentPlayer);
				}
			}
		}
	} else {
		this.gameTileSelected = this.selectGameTile(x, y);
		if (this.gameTileSelected != null && this.gameTileSelected.playerColor == currentPlayer) {
			this.boardTileSelected = this.selectBoardTile(x, y);
			this.boardTileSelected.color = GameConfig.COLOR.BOARD.SELECTED;
			for(var i = 0; i < this.boardTileCollection.length; i++) {
				this.boardTileCollection[i].color = this.gameTileSelected.showActions(this.boardTileCollection[i], this.gameTileCollection)
			}
			this.render(this.context);
		} else {
			this.refreshBoard();
		}
	}
};

GameManager.getCurrentPlayer = function(){
	if (this.gameTurn % 2 == 0){
		return GameConfig.COLOR.PLAYER_WHITE;
	} else {
		return GameConfig.COLOR.PLAYER_BLACK;
	}
}

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

GameManager.takePiece = function(boardTileOccupied, currentPlayer){
	for (var i = 0; i < this.gameTileCollection.length; i++) {
		if (this.gameTileCollection[i] == boardTileOccupied) {
			this.gameTileCollection.splice(i, 1);
			this.calculateScore(boardTileOccupied.points, currentPlayer);
			if (boardTileOccupied.type == GameConfig.FIGURES.TYPES.KING) {
				this.endGame(boardTileOccupied.playerColor);
			} 
		} 
	}
	if (this.gameTileCollection.length == 2) {
		this.endGame("Draw");
	}
	this.gameTurn++;
	this.refreshBoard();
}

GameManager.calculateScore = function(points, currentPlayer){
	switch(currentPlayer){
		case GameConfig.COLOR.PLAYER_WHITE:
			this.whitePlayerScore += points;
			document.getElementById("whiteScore").innerHTML = this.whitePlayerScore;
			break;
		case GameConfig.COLOR.PLAYER_BLACK:
			this.blackPlayerScore += points;
			document.getElementById("blackScore").innerHTML = this.blackPlayerScore;
			break;
		default:
			console.log("An error has occured");
	}
}

GameManager.endGame = function(player) {
	switch(player){
		case GameConfig.COLOR.PLAYER_BLACK:
			console.log("Nazi Wins!");
			break;
		case GameConfig.COLOR.PLAYER_WHITE:
			console.log("Nigga Wins!");
			break;
		case "Draw": 
			console.log("It's a draw");
			break;
		default:
			console.log("Someonething happened")
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