class Game {
  constructor() {
    this.canvas = document.querySelector('.snake');
    this.context = this.canvas.getContext('2d');
    this.box = 32;
    this.snake = [{
      x: 8 * this.box,
      y: 8 * this.box
    }];

    this.createBackground();
    this.createSnake();
  }

  createBackground() {
    this.context.fillStyle = 'lightgreen';
    this.context.fillRect(0, 0, 16 * this.box, 16 * this.box);
  }

  createSnake() {
    this.snake.forEach((s) => {
      this.context.fillStyle = 'green';
      this.context.fillRect(s.x, s.y, this.box, this.box);
    });
  }
}

const game = new Game();