var BDG2 = BDG2 || {};

BDG2.gameOver = function(){};

BDG2.gameOver.prototype = {
	init: function(score){
		alert(score)
	},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(400,160,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(400,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){ 
	 
/*		 this.game.abraham.destroy(); 
		this.doors.destroy(); 
		 this.game.pharisee.destroy(); 
		 this.game.luke.destroy(); 
		 this.game.titus.destroy(); 
		 this.game.mail.destroy(); 
		 this.game.feder.destroy(); 
		this.game.site.destroy(); */
		this.game.state.start("GameTitle");
	}
}
