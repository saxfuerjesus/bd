var BDG2 = BDG2 || {};

BDG2.Preload = function(){}

BDG2.Preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(400,300,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
		this.load.image("gametitle","assets/gametitle.png");
		this.load.image("play","assets/play.png");
		this.load.image("gameover","assets/gameover.png");
 		this.load.image('israel', 'assets/israel.png');
  		this.load.image('site', 'assets/site.png');
   		this.load.image('papirus', 'assets/papirus.png');
  		this.load.image('pharisee', 'assets/Pharisee.png');
  		this.load.image('cesarea', 'assets/1cesarea.jpg');
  		this.load.image('abraham', 'assets/abraham2.png');
 		this.load.image('luke', 'assets/Luke.png');
 		this.load.image('titus', 'assets/t.png');
		 this.load.image('mail', 'assets/m.png');
  		this.load.image('feder', 'assets/f.png');
   		this.load.spritesheet('doors','assets/doors.png',55,46);  
		this.load.image('pop', 'assets/pop.png');
		this.load.image('speech_part', 'assets/speech_part.png');
		this.load.script('i18n','js/i18n.js');
		 this.load.audio('startmusic','audio/01_01_musik.mp3');
		 this.load.audio('opendoors','audio/01_Erfolg.mp3');
	},
  	create: function(){ 
		this.setupAudio();
	},
	setupAudio: function(){
		this.opendoors = this.add.audio('opendoors');
		this.startmusic = this.add.audio('startmusic');
		this.startmusic.loop = true;
		this.sound.setDecodedCallback( [ this.startmusic,this.opendoors ], this.start, this );		
		this.startmusic.play();
	},
	start : function () {
		 this.state.start("GameTitle");
	}
}
