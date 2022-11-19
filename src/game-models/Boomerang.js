// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 1;
  }

  fly(enemy) {
    while (this.position !== enemy.position) {
      this.moveRight();
    }

    while (this.position !== enemy.position) {
      this.moveLeft();
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    // setInterval(() => {
    //   this.position -= 1;
    // }, 300);
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    // setInterval(() => {
    //   this.position += 1;
    // }, 300);
    // while (this.position !== enemy.position) {
    //   this.position += 1;
    // }
  }
}

module.exports = Boomerang;
