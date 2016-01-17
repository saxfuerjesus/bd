var BDG2 = BDG2 || {};

BDG2.cesarea = function(){
	var goal1=0; goal2=0, playOnce=false, score=0;  
	this.doors;
	//site,papirus,abraham,pharisee,luke,titus,mail,feder;
};

BDG2.cesarea.prototype = {
	create: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var cesare= this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'cesarea');
		cesare.anchor.set(0.5);
		cesare.scale.set(2);
		doors = this.game.add.sprite(this.game.world.centerX+50,this.game.world.centerY+5,'doors');
		doors.anchor.set(0.5);
		doors.scale.set(2);
		doors.frame=0;
		doors.name='NextLevel';
		israel = this.game.add.sprite(30,80,'israel');
		israel.anchor.set(0);
		israel.scale.set(0.5);
		site = this.game.add.sprite(60,105,'site');
		site.anchor.set(0);
		site.scale.set(1);
		site.name='Cesarea';
		papirus = this.game.add.sprite( this.game.world.centerX+50,150,'papirus');
		papirus.anchor.set(0.5);
		papirus.scale.set(0.5);
		abraham = this.game.add.sprite( this.game.world.centerX,this.game.world.centerY,'abraham');
		abraham.anchor.set(0.5);
		abraham.scale.set(0.25);
		abraham.name='abraham';
		pharisee = this.game.add.sprite( this.game.world.centerX+100,this.game.world.centerY,'pharisee');
		pharisee.anchor.set(0.5);
		pharisee.scale.set(0.5);
		pharisee.name='pharisee';
		luke = this.game.add.sprite( this.game.world.centerX-200,this.game.world.centerY+100,'luke');
		luke.anchor.set(0.5);
		luke.name='luke';
		titus = this.game.add.sprite( this.game.world.centerX+100,this.game.world.centerY+100,'titus');
		titus.anchor.set(0.5);
		titus.scale.set(0.1);
		titus.name='titus';
		mail = this.game.add.sprite( this.game.world.centerX-50,this.game.world.centerY+200,'mail');
		mail.anchor.set(0.5);
		mail.scale.set(0.1);
		mail.name='Recipient';
		feder = this.game.add.sprite( this.game.world.centerX+50,this.game.world.centerY+200,'feder');
		feder.anchor.set(0.5);
		feder.scale.set(0.1);
		feder.name='Author';

		doors.inputEnabled = true;
		abraham.inputEnabled = true;
		pharisee.inputEnabled = true;
		luke.inputEnabled = true;
		titus.inputEnabled = true;
		mail.inputEnabled = true;
		feder.inputEnabled = true;
		site.inputEnabled=true;

		this.game.physics.enable( [abraham,pharisee,luke,titus,mail,feder,doors], Phaser.Physics.ARCADE);

		pharisee.body.collideWorldBounds = true;
		abraham.body.collideWorldBounds = true;
		luke.body.collideWorldBounds = true;
		titus.body.collideWorldBounds = true;
		mail.body.collideWorldBounds = true;
		feder.body.collideWorldBounds = true;
		doors.body.collideWorldBounds = true;

		abraham.body.bounce.set(0.3);
		pharisee.body.bounce.set(0.3);
		luke.body.bounce.set(0.3);
		titus.body.bounce.set(0.3);
		mail.body.bounce.set(0.3);
		feder.body.bounce.set(0.3);

		var keylang=navigator.language;
		if ( keylang == null ) {
			keylang = "en-EN";
		}
		var key=keylang.substr(0,2)+"-level1";
		text=i18n[key][2];
		var style = { font: 'bold 14pt Courier', fill: 'black', align: 'left', wordWrap: true};
		bmptext = this.game.add.text(papirus.x,papirus.y,text,style);
		bmptext.maxwidth=papirus.width;
		bmptext.wordWrapWidth=bmptext.maxwidth;
		bmptext.anchor.set(0.5); 

		abraham.input.enableDrag (true) ;
		pharisee.input.enableDrag (true) ;
		luke.input.enableDrag (true) ;
		titus. input.enableDrag (true) ;
		mail. input.enableDrag (true) ;
		feder. input.enableDrag (true);

		abraham.events.onDragStart.add(this.onDragStart, this);
		abraham.events.onDragStop.add( this.onDragStop, this);
		abraham.events.onInputOver.add( this.onInputOver,this);
		abraham.events.onInputOut.add( this.onInputOut,this);

		pharisee.events.onDragStart.add( this.onDragStart, this);
		pharisee.events.onDragStop.add( this.onDragStop, this);
		pharisee.events.onInputOver.add( this.onInputOver,this);
		pharisee .events.onInputOut.add( this.onInputOut,this);

		luke.events.onDragStart.add( this.onDragStart, this);
		luke.events.onDragStop.add( this.onDragStop, this);
		luke.events.onInputOver.add( this.onInputOver,this);
		luke .events.onInputOut.add( this.onInputOut,this);

		titus.events.onDragStart.add( this.onDragStart, this);
		titus.events.onDragStop.add( this.onDragStop, this);
		titus.events.onInputOver.add( this.onInputOver,this);
		titus.events.onInputOut.add( this.onInputOut,this);

		mail.events.onDragStart.add( this.onDragStart, this);
		mail.events.onDragStop.add( this.onDragStop, this);
		mail.events.onInputOver.add( this.onInputOver,this);
		mail.events.onInputOut.add( this.onInputOut,this);

		feder.events.onDragStart.add( this.onDragStart, this);
		feder.events.onDragStop.add( this.onDragStop, this);
		feder.events.onInputOver.add( this.onInputOver,this);
		feder.events.onInputOut.add( this.onInputOut,this);
		site.events.onInputOver.add( this.onInputOver,this);
		doors.events.onInputOver.add( this.onInputOver,this);

	},

	update: function() {
		if (this.goal1 > 0) {
   			if (this.goal2 > 0) {
    				doors.frame=1;
    				playOnce=true;
    				titus.inputEnabled=false;
    				mail.inputEnabled=false;
     			feder.inputEnabled=false;
      			site.inputEnabled=false;
      			pharisee.inputEnabled=false;
      			abraham.inputEnabled=false;
				this.score=1;
				console.log("%c score "+this.score, "color:white; background:red");
    			}
 		}
 		if (playOnce==true) {
		var keylang=navigator.language;
		if ( keylang == null ) {
			keylang = "en-EN";
		}
		var key=keylang.substr(0,2)+"-level1";
			bmptext.text=i18n[key][3];
			this.startmusic.stop();
			this.sound.play("opendoors");
  			this.goal1=0;
  			this.goal2=0;
			this.score=1;
			localStorage.setItem("bestScore","1");
		}
	},

	onDragStart: function(sprite, pointer) {
		sprite.body.moves=false;
	},

	onDragStop: function(sprite, pointer) {
  		sprite.body.moves=false;
  		this.game.physics.arcade.overlap(luke, feder, this.lf, null, this);
  		this.game.physics.arcade.overlap(titus, mail , this.tm, null, this);
	}, 

	onInputOver :function(sprite, pointer){
//		console.log("%c score "+this.score+" sprite over "+sprite.name, "color:white; background:red");
		if (sprite.name =='abraham' ) {
	//		abrahamBubble = this.SpeechText(this.game, abraham.position.x, abraham.position.y, 0, 0, abraham.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='luke') {
	//		lukeBubble = new SpeechText(this.game, luke.position.x, luke.position.y,0, 0, luke.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='titus') {
//			titusBubble = new SpeechText(this.game, titus.position.x, titus.position.y, 0, 0, titus.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='pharisee') {
//			phariseeBubble = new SpeechText(this.game, pharisee.position.x, pharisee.position.y, 0, 0, pharisee.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='Recipient') {
//			mailBubble = new SpeechText(this.game, mail.position.x, mail.position.y, 0, 0, mail.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='Author') {
	//		federBubble = new SpeechText(this.game, feder.position.x, feder.position.y, 0, 0, feder.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='Cesarea') {
	//		siteBubble = new SpeechText(this.game, site.position.x, site.position.y, 0, 0, site.name, 1000, this.elem, function(){}, this);
		} else if (sprite.name=='NextLevel'){
//			console.log("%cdoor touched", "color:white; background:red");
			if ( this.score>0){
//				console.log("%c score reached", "color:white; background:red");
				this.game.state.start("GameOver",true,false,"Lukas 1,3");	
			}
		}
	},

	onInputOut: function (sprite, pointer){
		if (sprite.name =='abraham' ) {
	//		abrahamBubble.destroy();
		} else if (sprite.name=='luke') {
	//		lukeBubble.destroy();
		} else if (sprite.name=='titus') {
		//	titusBubble.destroy();
		} else if (sprite.name=='pharisee') {
	//		phariseeBubble.destroy();
		} else if (sprite.name=='Recipient') {
//			mailBubble.destroy();
		} else if (sprite.name=='Author') {
	//		federBubble.destroy();
		} else if (sprite.name=='Cesarea') {
//			siteBubble.destroy();
		}
	}, 

	 lf :function(obj1, obj2) { 
 		luke.inputEnabled = false; 
 		luke.input.enableDrag (false) ; 
		 luke.body.collideWorldBounds = false; 
		 luke.enableBody=false; 
		 feder.inputEnabled = false; 
		 feder.input.enableDrag (false) ; 
		 feder.body.collideWorldBounds = false;
		 feder.enableBody=false; 
		 this.goal1=1; 
	},

	 tm: function (obj1, obj2) { 
		 titus.inputEnabled = false; 
		 titus.input.enableDrag (false) ; 
		 titus.body.collideWorldBounds = false; 
		 titus.enableBody=false; 
		 mail.inputEnabled = false; 
		 mail.input.enableDrag (false) ; 
		 mail.body.collideWorldBounds = false; 
		 mail.enableBody=false; 
		 this.goal2=1; 
	}
}
