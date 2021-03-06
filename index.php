<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chess</title>
</head>
<body>
    <canvas width = "500" height = "500" id= "gameBoard" style = "border: 2px solid; display: inline-block;"></canvas>  
	<div style = "display: inline-block; margin-left: 20px">
		<div style = "margin-bottom: 75px;">
			<div style = "margin-bottom: 25px;">
				Score:
			</div>
			<div style = "display: inline-block">
				White: <span id="scoreWhite">0</span>
			</div>
			<div style = "display: inline-block; margin-left: 50px;">
				Black: <span id="scoreBlack">0</span>
			</div>
		</div>
		<div style = "margin-bottom: 150px;">
			<div>
				<span id = "winnerPlayer" style = "font-weight: bold;">&nbsp;</span><span id = "currentPlayerContainer"><span id = "currentPlayer" style = "font-weight: bold;">WHITE</span> player turn</span>
			</div>
		</div>
		<div>
			<div>
				Legend:
			</div>
			<div style = "margin-top: 10px;">
				<span style="background-color: gray; width: 20px; float: left;">&nbsp;</span>&nbsp;- Pawn - 100pts
			</div>
			<div style = "margin-top: 10px;">
				<span style="background-color: red; width: 20px; float: left;">&nbsp;</span>&nbsp;- Rook - 250pts
			</div>
			<div style = "margin-top: 10px;">
				<span style="background-color: lime; width: 20px; float: left;">&nbsp;</span>&nbsp;- Knight - 250pts
			</div>
			<div style = "margin-top: 10px;">
				<span style="background-color: blue; width: 20px; float: left;">&nbsp;</span>&nbsp;- Bishop - 250pts
			</div>
			<div style = "margin-top: 10px;">
				<span style="background-color: violet; width: 20px; float: left;">&nbsp;</span>&nbsp;- Queen - 500pts
			</div>
			<div style = "margin-top: 10px;">
				<span style="background-color: orange; width: 20px; float: left;">&nbsp;</span>&nbsp;- King - 1000pts
			</div>
		</div>	
	</div>
	<script src="managers/GameManager.js"></script>
	<script src="config/GameConfig.js"></script>
	
	<script src="sprites/BoardTile.js"></script>	
	<script src="sprites/GameTile.js"></script>
	
	<script src="sprites/Rook.js"></script>
	<script src="sprites/Knight.js"></script>
	<script src="sprites/Bishop.js"></script>
	<script src="sprites/King.js"></script>
	<script src="sprites/Queen.js"></script>
	<script src="sprites/Pawn.js"></script>
    <script src="script.js"></script>
</body>
</html>
