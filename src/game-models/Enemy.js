// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = this.generatePosition();
  }

  generatePosition() {
    const rand = 15 - 0.5 + Math.random() * (29 - 15 + 1);
    return Math.round(rand);
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
