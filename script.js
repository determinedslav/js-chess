var canvas = document.getElementById("gameBoard");

GameManager.init(canvas);

canvas.addEventListener('mousedown', function(e) {
	GameManager.mouseClick(e.clientX, e.clientY);
});