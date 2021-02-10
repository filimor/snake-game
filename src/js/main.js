class Game {
  constructor() {
    this.canvas = document.querySelector('.snake');
    this.context = this.canvas.getContext('2d');
    this.box = 32;

    this.createBackground();
  }

  createBackground() {
  this.context.fillStyle = 'lightgreen';
  this.context.fillRect(0, 0, 16 * this.box, 16 * this.box);
  }
}

const game = new Game();