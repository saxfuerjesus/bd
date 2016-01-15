var BDG2 = BDG2 || {};

BDG2.Preload = function(){}

BDG2.Preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(400,300,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("gameover","assets/gameover.png");
 		this.game.load.image('israel', 'assets/israel.png');
  		this.game.load.image('site', 'assets/site.png');
   		this.game.load.image('papirus', 'assets/papirus.png');
  		this.game.load.image('pharisee', 'assets/Pharisee.png');
  		this.game.load.image('cesarea', 'assets/1cesarea.jpg');
  		this.game.load.image('abraham', 'assets/abraham2.png');
 		this.game.load.image('luke', 'assets/Luke.png');
 		this.game.load.image('titus', 'assets/t.png');
		 this.game.load.image('mail', 'assets/m.png');
  		this.game.load.image('feder', 'assets/f.png');
   		this.game.load.spritesheet('doors','assets/doors.png',55,46);  
		this.game.load.image('pop', 'assets/pop.png');
		this.game.load.image('speech_part', 'assets/speech_part.png');
  		this.game.load.audio('success','audio/fx_win.ogg'); 
		this.game.load.script('i18n','js/i18n.js');

		this.game.load.audio('sfxHitMusic','audio/bgm_electric_air.ogg');
		this.sfxHitMusic = this.game.add.audio('sfxHitMusic');
		this.sfxHitMusic.loop = true;
		this.sfxHitMusic.play();

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}