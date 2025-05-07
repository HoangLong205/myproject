/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position: absolute;" />';
  }

  this.moveRight = () => this.left += this.speed;
  this.moveLeft = () => this.left -= this.speed;
  this.moveUp = () => this.top -= this.speed;
  this.moveDown = () => this.top += this.speed;
}

// Tạo nhân vật với ảnh mới và tốc độ tuỳ chỉnh
var hero = new Hero('hero.png', 20, 30, 100, 20);

function render() {
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowRight':
      if (hero.left < window.innerWidth - hero.size) hero.moveRight();
      break;
    case 'ArrowLeft':
      if (hero.left > 0) hero.moveLeft();
      break;
    case 'ArrowUp':
      if (hero.top > 0) hero.moveUp();
      break;
    case 'ArrowDown':
      if (hero.top < window.innerHeight - hero.size) hero.moveDown();
      break;
  }
  render();
}

window.addEventListener('keydown', handleKeyDown);
render()