var BDG2 = BDG2 || {};

BDG2.Boot = function() {};

BDG2.Boot.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/loading.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
	//	this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}
