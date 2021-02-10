class Game {
  constructor() {
    this.canvas = document.querySelector('.snake');
    this.context = this.canvas.getContext('2d');
    this.box = 32;
    this.snake = [{
      x: 8 * this.box,
      y: 8 * this.box
    }];
    this.direction = 'right';
    setInterval(() => this.startGame(), 100);
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

  startGame() {
    if (this.snake[0].x > 15 * this.box && this.direction === 'right') {
      this.snake[0].x = 0;
    } else if (this.snake[0].x < 0 && this.direction === 'left') {
      this.snake[0].x = 16 * box;
    } else if (this.snake[0].y > 15 * this.box && this.direction === 'down') {
      this.snake[0].y = 0;
    } else if (this.snake[0].y < 0 && this.direction === 'up') {
      this.snake[0].y = 16 * box;
    }

    this.createBackground();
    this.createSnake();

    let snakeX = this.snake[0].x;
    let snakeY = this.snake[0].y;

    switch (this.direction) {
      case 'right':
       snakeX += this.box;
        break;
      case 'left':
        snakeX -= this.box;
        break;
      case 'up':
        snakeY -= this.box;
        break;
      case 'down':
        snakeY += this.box;
        break;
      default:
        break;
    }

    this.snake.pop();

    this.snake.unshift({
      x: snakeX,
      y: snakeY
    });
  }
}

function update(event) {
  event.preventDefault();

  if (event.key === 'ArrowLeft' && game.direction != 'right') {
    game.direction = 'left';
  } else if (event.key === 'ArrowRight' && game.direction != 'left') {
    game.direction = 'right';
  } else if (event.key === 'ArrowDown' && game.direction != 'up') {
    game.direction = 'down';
  } else if (event.key === 'ArrowUp' && game.direction != 'down') {
    game.direction = 'up';
  }
}

const game = new Game();
document.body.addEventListener('keydown', update);