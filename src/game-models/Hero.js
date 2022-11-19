const player = require('play-sound')(opts = {});

// Наш герой.

class Hero {
  constructor({ boomerang, score = 0, position = 0 }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.boomerang = boomerang;
    this.position = position;
    this.hasBoomerang = true;
    this.score = score;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    this.boomerang.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.boomerang.position += 1;
  }

  attack() {
    // Атакуем.
    // this.boomerang.fly()
    if (this.hasBoomerang) {
      player.play('src/sounds/just-like-magic.wav');
      this.hasBoomerang = false;
      const startPosition = this.boomerang.position;
      let direction = 'right';
      const id1 = setInterval(() => {
        if (this.boomerang.position === this.position) {
          this.boomerang.position = this.position + 1;
          this.hasBoomerang = true;
          clearInterval(id1);
        } else {
          if (this.boomerang.position === startPosition + 10) {
            direction = 'left';
          }
          if (direction === 'right') {
            this.boomerang.position += 1;
          }
          if (direction === 'left') {
            this.boomerang.position -= 1;
          }
        }
      }, 30);
    }
  }

  die() {
    player.play('src/sounds/electric-fence-buzzing.wav');
    setTimeout(() => {
      player.play('src/sounds/game-over.wav');
      this.skin = '💀';
      console.log('YOU ARE DEAD!💀');
      process.exit();
    }, 500);
  }
}

module.exports = Hero;
