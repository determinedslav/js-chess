var GameConfig = {
	
	BOARD_SIZE : {
		BOARD_SIDE : 10,
	},

    TILE_SIZE : {
        BOARD_TILE : 50,
        GAME_TILE : 30
    },
	
	FIGURES : {
		TYPES : {
			PAWN : "pawn",
			ROOK : "rook",
			KNIGHT : "knight",
			BISHOP : "bishop",
			KING : "king",
			QUEEN : "queen",
		},
		POINTS : {
			COMMON : 100,
			SPECIAL : 250,
			QUEEN : 500,
			KING : 1000,
		}
	},

	COLOR : {
		PLAYER_WHITE : "#FFFFFF",
		PLAYER_BLACK : "#000000",
		BOARD_WHITE : "#FFFEEE",
		BOARD_BLACK : "#111000",
		ROOK : "#FF0000",
		KNIGHT : "#00FF00 ",
		BISHOP : "#0000FF",
		KING : "#FF8800",
		QUEEN : "#FF00FF",
		PAWN : "#888888",
		BOARD : {
			WHITE : "#DDDCCC",
			BLACK : "#333222",
			SELECTED : "#FFCC11",
			MOVE : "#006600",
			ENEMY : "#550000",
		}
	}
};