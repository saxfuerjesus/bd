var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(400,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		gameTitle.scale.set(0.5);
		var playButton = this.game.add.button(400,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
	//	console.log("Your navigator language is"+navigator.language);
 		console.log("Starting level1"+localStorage.getItem("bestScore"));
		this.game.state.start("level1");
	}
}