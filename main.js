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
var hiscore = 0;
var rvar = 0;
var direction ="";
var running = false;
var enter = false;

//Initial function peformed when the game is loaded onto website.

function load() {
	document.getElementById("gameContainer").innerHTML = "<button type='button' id='startButton' onclick='run()'>START</button>";
}

//Main functions:

function run() {
	replace("<img id='logo' src='http://i.imgur.com/t4bXUM2.png' />");
	document.getElementById("dummy").innerHTML  = '<embed src="recording1.wav" autostart="true" loop="false" width="0px" height="0px"></embed>';
	window.setTimeout(function() {
		document.getElementById("gameContainer").style.background = "linear-gradient(#001cee,#0014a9,black)";
		window.setInterval(function() {
			document.getElementById("dummy").innerHTML = '<embed src="music.mp3" autostart="true" loop="true" width="0px" height="0px"></embed>';
		},242000);
		enter = true;
		back();
	},5000);
}

function start() {
	if (check_played == false) {
		replace("<br><br><h2>Instructions</h2><br><div class='divider'></div><p>Press the arrow key corresponding with the white arrow and opposite the black arrow! Try to score as high as you can!</p><button type='button' class='menuButton' onclick='begin()'>Got It!</button>")
	} else {
		begin();
	}
}

function credits() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><p>All programming by Andrew Alban</p><p>Distributed by SoniciaNova</p><div class='divider'></div><p>\"Press The Arrow\" logo by <a href='http://cooltext.com/' target='_blank'><img id='cooltext' src='https://ct.mob0.com/Small-Logo.png' /></a></p><p>Music: \"Am-Trans\" by \"<a href='http://freemusicarchive.org/music/Podington_Bear/' target='_blank'>Podington Bear</a>\"<br><br><button type='button' class='menuButton' onclick='back()'>BACK</button>")
}

function back() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><p>A skill game by <img id='sonicianova' src='company_logo.png' /></p><br><br><button class='menuButton' type='button' onclick='start()'>START</button><br><br><button class='menuButton' type='button' onclick='credits()'>CREDITS</button>");
}

function begin() {
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h1 id='countdown'>3</h1><br><h2 id='arrow'>Get Ready!</h2><p id='score'></p><p id='hiscore'></p>");
	time = 1.59;
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
	replace("<img id='title' src='pta_title.png' /><br><br><div class='divider'></div><br><h2>"+message+"</h2><br><h3>Your final score was "+score+"</h3><br><button type='button' class='menuButton' onclick='begin()'>AGAIN!</button>");
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
	rvar = Math.random();
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
	document.getElementById("hiscore").innerHTML = "Hi-score:" + hiscore;
}

//This is the key detection scripts for the arrows.

document.onkeydown = checkKey;

function checkKey(e) {

	e = e || window.event;
	e.preventDefault();

	if (e.keyCode == '38') {
		// up arrow
		e.preventDefault();
		if (direction === "up" && running == true) {
			score += 1;
			time = 1.59;
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	}
	else if (e.keyCode == '40') {
		// down arrow
		e.preventDefault();
		if (direction === "down" && running == true) {
			score += 1;
			time = 1.59;
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	}
	else if (e.keyCode == '37') {
		// left arrow
		e.preventDefault();
		if (direction === "left" && running == true) {
			score += 1;
			time = 1.59;
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	}
	else if (e.keyCode == '39') {
		// right arrow
		e.preventDefault();
		if (direction === "right" && running == true) {
			score += 1;
			time = 1.59;
			if (score > hiscore) {
				hiscore = score;
			}
			randomize();
		} else {
			gameOver("You pressed the wrong key, so you lose!");
		}
		displayScore();
	}
	else if (e.keyCode == '13' && enter == true) {
		// enter key
		e.preventDefault();
		begin();
	}
}
