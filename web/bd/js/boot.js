var boot = function(game){
	console.log("%cStarting Biblical dialogues", "color:white; background:red");
	console.log("your navigator language "+navigator.language);
	console.log("your prreferences"+navigator.languages);
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/loading.png"); 
	},
  	create: function(){
	//	 boot.lang=navigator.language.subst(0,2);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}
