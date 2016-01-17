var BDG2 = BDG2 || {};

BDG2.gameOver = function(){};

BDG2.gameOver.prototype = {
	init: function(score){
		alert(score)
	},
  	create: function(){
  		var gameOverTitle = this.add.sprite(400,160,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.add.button(400,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){ 	 
/*
		 this.abraham.destroy(); 
		this.doors.destroy(); 
		 this.pharisee.destroy(); 
		 this.luke.destroy(); 
		 this.titus.destroy(); 
		 this.mail.destroy(); 
		 this.feder.destroy(); 
		this.site.destroy(); 
*/
		this.state.start("GameTitle");
	}
}
