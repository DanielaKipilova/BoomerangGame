// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');
const player = require('../node_modules/play-sound')(opts = {});

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    // this.boomerang = new Boomerang(this.hero, this.enemy);
    this.enemy = new Enemy();
    this.hero = new Hero({ boomerang: new Boomerang(), position: 0 });
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang.position >= this.enemy.position && !this.hero.hasBoomerang) {
      setTimeout(() => {
        player.play('src/sounds/exclamation-of-pain.wav');
        this.enemy.die();
        this.enemy = null;
        this.enemy = new Enemy();
      }, 10);
    }
  }

  play() {
    console.log(this.hero);
    // const speed = Math.random() * 100 + 200;
    runInteractiveConsole(this.hero);
    this.id = setInterval(() => {
      // Let's play!
      this.enemy.moveLeft();
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 80);
  }
}

module.exports = Game;
