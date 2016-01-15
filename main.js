var BDG2 = BDG2 || {};
BDG2.game = new Phaser.Game(800,600, Phaser.CANVAS, "game");
BDG2.game.state.add("Boot",BDG2.Boot);
BDG2.game.state.add("Preload",BDG2.Preload);
BDG2.game.state.add("GameTitle",BDG2.GameTitle);
BDG2.game.state.add("level1",BDG2.cesarea);
BDG2.game.state.add("GameOver",BDG2.gameOver);
BDG2.game.state.start("Boot");
