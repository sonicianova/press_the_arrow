

//All programming by Andrew Alban, founder of SoniciaNova, 2016

//Define variables:

pageWidth = getWidth();

//Initial function run when page loads:

function init() {
	replaceMain("header",'<a href="https://sonicianova.github.io/home"><img src="https://images.cooltext.com/4699727.png" id="main_logo" alt="SoniciaNova" /></a>');
	replaceMain("navbar",'<a class="nav_link" href="https://sonicianova.github.io/games"><div class="nav_button">GAMES</div></a><a class="nav_link" href="https://sonicianova.github.io/home"><div class="nav_button">HOME</div></a><a class="nav_link" href="https://sonicianova.github.io/programs"><div class="nav_button">PROGRAMS</div></a>');
	replaceMain("container",'<h1 class="title">Press the Arrow</h1><div class="dividerMain"></div><br><br><div id="gameContainer"></div><div id="dummy"></div>');
	load();
}

//Main functions page uses:



//Tools:

function replaceMain(x,y) {
	document.getElementById(x).innerHTML = y;
}