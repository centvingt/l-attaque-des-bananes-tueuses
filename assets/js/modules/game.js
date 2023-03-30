import { Background } from './background.js'

export class Game {
  score = 0
  gameOver = false
  lastTimeStamp = 0
  logp
  constructor() {
    /** @type {HTMLCanvasElement} */
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.background = new Background()

    this.animate(0)
  }

  /**
   * @param {number} timeStamp Nombre de millisecondes écoulées depuis le début du jeu
   */
  animate(timeStamp) {}
}
