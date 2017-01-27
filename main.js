//SoniciaNova website programming by Andrew Alban, 2016.
//This code is property of SoniciaNova. Piracy of this code is illegal.

//Define variables:

//Initial function:

function init() {
	replaceMain('<div id="header"><a href="https://sonicianova.github.io/home"><img src="website_title.png" id="website_title" /></a></div><div id="navBar"><a href="https://sonicianova.github.io/games"><div class="navButton" type="button" id="gamesButton">GAMES</div></a><a href="https://sonicianova.github.io/home"><div class="navButton" type="button" id="homeButton">HOME</div></a><a href="https://sonicianova.github.io/programs"><div class="navButton" type="button" id="programsButton">PROGRAMS</div></a></div><br><br><h1>Press the Arrow</h1><br><div id="gameContainer"></div><div id="dummy"></div>'); //This code creates the basic elements of the website.
	load();
}

//Tools:

function replaceMain(object) { //This replaces what is currently inside of the mainContainer.
	document.getElementById("mainContainer").innerHTML = object;
}



//All programming by Andrew W. Alban, 2016
//Distributed by SoniciaNova, founded by Andrew W. Alban


//Define Variables:

var check_played = false;
var time = 1.59;
var score = 0;
var normalhiscore = 0;
var hardhiscore = 0;
var impossiblehiscore = 0;
var easyhiscore = 0;
var rvar = 0;
var direction ="";
var running = false;
var enter = false;
var difficulty = "Normal";
var keyType = "arrow";

//Initial function peformed when the game is loaded onto website.

function load() {
	document.getElementById("gameContainer").innerHTML = "<button type='button' id='startButton' onclick='run()'>START</button>";
}

//Main functions:

function run() {
	replace("<img id='logo' src='SoniciaNova.png' />");
	document.getElementById("dummy").innerHTML  = '<embed src="recording1.wav" autostart="true" loop="false" width="0px" height="0px"></embed>';
	window.setTimeout(function() {
		document.getElementById("gameContainer").style.background = "linear-gradient(#001cee,#0014a9,black)";
		document.getElementById("dummy").innerHTML = '<embed src="music.mp3" autostart="true" loop="true" width="0px" height="0px"></embed>';
		enter = true;
		back();
	},5000);
}

function start() {
	if (check_played == false) {
		replace("<br><br><h2>Instructions</h2><br><div class='divider'></div><p>Press the arrow key corresponding with the white arrow and opposite the black arrow! (Hard and Impossible mode also use WASD keys) Try to score as high as you can!</p><button type='button' class='menuButton' onclick='begin()'>Got It!</button>")
	} else {
		begin();
	}
}

function credits() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><p>All programming by Andrew Alban</p><p>Distributed by SoniciaNova</p><div class='divider'></div><p>\"Press The Arrow\" logo by <a href='http://cooltext.com/' target='_blank'><img id='cooltext' src='https://ct.mob0.com/Small-Logo.png' /></a></p><p>Music: \"Am-Trans\" by \"<a href='http://freemusicarchive.org/music/Podington_Bear/' target='_blank'>Podington Bear</a>\"<br><br><button type='button' class='menuButton' onclick='back()'>BACK</button>")
}

function back() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><p>A skill game by <img id='sonicianova' src='company_logo.png' /></p><br><br><button class='menuButton' type='button' onclick='start()'>START</button><br><br><button class='menuButton' type='button' onclick='options()'>OPTIONS</button>");
}

function options() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><button class='menuButton' type='button' onclick='changeDifficulty()' id='difficulty'></button><br><br><button class='menuButton' type='button' onclick='credits()'>CREDITS</button><br><br><button class='menuButton' type='button' onclick='back()'>BACK</button>");
	document.getElementById("difficulty").innerHTML = "Difficulty: " + difficulty;
}

function begin() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h1 id='countdown'>3</h1><br><h2 id='arrow'>Get Ready!</h2><p id='score'></p><p id='hiscore'></p>");
	setTime();
	score = 0;
	displayScore();
	window.setTimeout(function() {
		document.getElementById("countdown").innerHTML = "2";
		window.setTimeout(function() {
			document.getElementById("countdown").innerHTML = "1";
			window.setTimeout(function() {
				document.getElementById("countdown").innerHTML = "GO!";
				play();
			}, 1000);
		}, 1000);
	}, 1000);
}

function play() {
	randomize();
	running = true;
}

window.setInterval(function() {
		if (running == true) {
			updateTime();
			if (time < 0) {
				gameOver("You ran out of time!");
			}
		}
	},10);

function gameOver(message) {
	running = false;
	switch (difficulty) {
		case "Normal":
			replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h2>"+message+"</h2><h3>Score: "+score+"</h3><h3>" + difficulty + " Hi-score: "+normalhiscore+"</h3><br><button type='button' id='biggerButton' class='menuButton' onclick='begin()'>AGAIN!<p id='press_enter'>(Press Enter)</p></button><button type='button' class='menuButton' onclick='back()'>BACK</button>");
			break;
		case "Hard":
			replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h2>"+message+"</h2><h3>Score: "+score+"</h3><h3>" + difficulty + " Hi-score: "+hardhiscore+"</h3><br><button type='button' id='biggerButton' class='menuButton' onclick='begin()'>AGAIN!<p id='press_enter'>(Press Enter)</p></button><button type='button' class='menuButton' onclick='back()'>BACK</button>");
			break;
		case "Impossible":
			replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h2>"+message+"</h2><h3>Score: "+score+"</h3><h3>" + difficulty + " Hi-score: "+impossiblehiscore+"</h3><br><button type='button' id='biggerButton' class='menuButton' onclick='begin()'>AGAIN!<p id='press_enter'>(Press Enter)</p></button><button type='button' class='menuButton' onclick='back()'>BACK</button>");
			break;
		case "Easy":
			replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h2>"+message+"</h2><h3>Score: "+score+"</h3><h3>" + difficulty + " Hi-score: "+easyhiscore+"</h3><br><button type='button' id='biggerButton' class='menuButton' onclick='begin()'>AGAIN!<p id='press_enter'>(Press Enter)</p></button><button type='button' class='menuButton' onclick='back()'>BACK</button>");
			break;
	}
}

function changeDifficulty() {
	switch (difficulty) {
		case "Normal":
			difficulty = "Hard";
			document.getElementById("difficulty").innerHTML = "Difficulty: " + difficulty;
			break;
		case "Hard":
			difficulty = "Impossible";
			document.getElementById("difficulty").innerHTML = "Difficulty: " + difficulty;
			break;
		case "Impossible":
			difficulty = "Easy";
			document.getElementById("difficulty").innerHTML = "Difficulty: " + difficulty;
			break;
		case "Easy":
			difficulty = "Normal";
			document.getElementById("difficulty").innerHTML = "Difficulty: " + difficulty;
			break;
	}
}

//Tools:

function add(object) {
	document.getElementById("gameContainer").innerHTMl += object;
}

function replace(object) {
	document.getElementById("gameContainer").innerHTML = object;
}

function updateTime() {
	time = time-0.01;
	document.getElementById("countdown").innerHTML = time.toFixed(2);
}

function randomize() {
	if (difficulty === "Easy" || difficulty === "Normal") {
		rvar = Math.random();
		keyType = "arrow";
		if (rvar <0.125) {
			setArr("&larr;", "white");
			setDir("left");
		} else if (rvar <0.25) {
			setArr("&rarr;", "white");
			setDir("right");
		} else if (rvar <0.375) {
			setArr("&uarr;", "white");
			setDir("up");
		} else if (rvar <0.5) {
			setArr("&darr;", "white");
			setDir("down");
		} else if (rvar <0.625) {
			setArr("&larr;", "black");
			setDir("right");
		} else if (rvar <0.75) {
			setArr("&rarr;", "black");
			setDir("left");
		} else if (rvar <0.875) {
			setArr("&uarr;", "black");
			setDir("down");
		} else if (rvar <1) {
			setArr("&darr;", "black");
			setDir("up");
		}
	} else if (difficulty === "Hard" || difficulty === "Impossible") {
		rvar = Math.random();
		if (rvar <0.0625) {
			setArr("&larr;", "white");
			setDir("left");
			keyType = "arrow";
		} else if (rvar <0.125) {
			setArr("&rarr;", "white");
			setDir("right");
			keyType = "arrow";
		} else if (rvar <0.1875) {
			setArr("&uarr;", "white");
			setDir("up");
			keyType = "arrow";
		} else if (rvar <0.25) {
			setArr("&darr;", "white");
			setDir("down");
			keyType = "arrow";
		} else if (rvar <0.3125) {
			setArr("&larr;", "black");
			setDir("right");
			keyType = "arrow";
		} else if (rvar <0.375) {
			setArr("&rarr;", "black");
			setDir("left");
			keyType = "arrow";
		} else if (rvar <0.4375) {
			setArr("&uarr;", "black");
			setDir("down");
			keyType = "arrow";
		} else if (rvar <0.5) {
			setArr("&darr;", "black");
			setDir("up");
			keyType = "arrow";
		} else if (rvar <0.5625) {
			setArr("A", "white");
			setDir("left");
			keyType = "key";
		} else if (rvar <0.625) {
			setArr("D", "white");
			setDir("right");
			keyType = "key";
		} else if (rvar <0.6875) {
			setArr("W", "white");
			setDir("up");
			keyType = "key";
		} else if (rvar <0.75) {
			setArr("S", "white");
			setDir("down");
			keyType = "key";
		} else if (rvar <0.8125) {
			setArr("A", "black");
			setDir("right");
			keyType = "key";
		} else if (rvar <0.875) {
			setArr("D", "black");
			setDir("left");
			keyType = "key";
		} else if (rvar <0.9375) {
			setArr("W", "black");
			setDir("down");
			keyType = "key";
		} else if (rvar <1) {
			setArr("S", "black");
			setDir("up");
			keyType = "key";
		}
	}
}

function setArr(type,color) {
	document.getElementById("arrow").innerHTML = type;
	document.getElementById("arrow").style.color = color;
}

function setDir(dir) {
	direction = dir;
}

function displayScore() {
	document.getElementById("score").innerHTML = "Score:" + score;
	switch (difficulty) {
		case "Normal":
			document.getElementById("hiscore").innerHTML = "Hi-score:" + normalhiscore;
			break;
		case "Hard":
			document.getElementById("hiscore").innerHTML = "Hi-score:" + hardhiscore;
			break;
		case "Impossible":
			document.getElementById("hiscore").innerHTML = "Hi-score:" + impossiblehiscore;
			break;
		case "Easy":
			document.getElementById("hiscore").innerHTML = "Hi-score:" + easyhiscore;
			break;
	}
}

function setTime() {
	switch (difficulty) {
		case "Normal":
			time = 1.5;
			if (score > normalhiscore) {
				normalhiscore = score;
				document.getElementById("hiscore").innerHTML = "Hi-score:" + normalhiscore;
			}
			break;
		case "Hard":
			time = 1;
			if (score > hardhiscore) {
				hardhiscore = score;
				document.getElementById("hiscore").innerHTML = "Hi-score:" + hardhiscore;
			}
			break;
		case "Impossible":
			time = 0.5;
			if (score > impossiblehiscore) {
				impossiblehiscore = score;
				document.getElementById("hiscore").innerHTML = "Hi-score:" + impossiblehiscore;
			}
			break;
		case "Easy":
			time = 2;
			if (score > easyhiscore) {
				easyhiscore = score;
				document.getElementById("hiscore").innerHTML = "Hi-score:" + easyhiscore;
			}
			break;
	}
}

//This is the key detection scripts for the arrows.

document.onkeydown = checkKey;

function checkKey(e) {
	e = e || window.event;
	e.preventDefault();
	if (e.keyCode == '38' && running == true) {
		// up arrow
		e.preventDefault();
		if (direction === "up" && running == true && keyType === "arrow") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '40' && running == true) {
		// down arrow
		e.preventDefault();
		if (direction === "down" && running == true && keyType === "arrow") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '37' && running == true) {
		// left arrow
		e.preventDefault();
		if (direction === "left" && running == true && keyType === "arrow") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '39' && running == true) {
		// right arrow
		e.preventDefault();
		if (direction === "right" && running == true && keyType === "arrow") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '87' && running == true) {
		// w
		e.preventDefault();
		if (direction === "up" && running == true && keyType === "key") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '65' && running == true) {
		// a
		e.preventDefault();
		if (direction === "left" && running == true && keyType === "key") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '83' && running == true) {
		// s
		e.preventDefault();
		if (direction === "down" && running == true && keyType === "key") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '68' && running == true) {
		// d
		e.preventDefault();
		if (direction === "right" && running == true && keyType === "key") {
			score += 1;
			setTime();
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	} else if (e.keyCode == '13' && enter == true) {
		// enter key
		e.preventDefault();
		begin();
	}
}
