class TransferScene extends Scene {
  constructor(level) {
    super();
    this.level = level;
    this.fontSize = 140;
    this.fontColor = 255;
    // this.framesElapsed; // value inherited from super
  }

  draw(play) {
    super.draw(play);
    ctx.font = `${this.fontSize}px Comic Sans MS`;
    ctx.textAlign = 'center';
    ctx.fillStyle = `rgba(255,${this.fontColor},${this.fontColor},1)`;

    ctx.fillText(
      `Get ready for level ${this.level}`,
      play.width / 2,
      play.height / 2
    );
  }

  update() {
    // super.update();
    // console.log('frames elapsed', this.framesElapsed); // value inherited from super does not need to be declared in constructor
    // 2s 60fps -> 120fps = 2s
    // this.framesElapsed++;

    // if (this.framesElapsed > 120) {
    //   play.goToScene(new GameScene(play.settings, this.level));
    // }

    this.fontSize -= 1;
    this.fontColor -= 1.5;

    if (this.fontSize < 1) {
      play.goToScene(new GameScene(play.settings, this.level));
    }
  }
}
