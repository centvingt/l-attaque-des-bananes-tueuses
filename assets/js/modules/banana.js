import { Game } from './game.js'

export class Banana {
  sourceX = 0
  sourceY = 0

  fps = 1000 / 12
  framesLength = 16

  /**
   * @param {Game} game
   */
  constructor(game) {
    this.image = new Image()
    this.image.src = './assets/img/banana-spritesheet.png'

    this.ctx = game.ctx

    const { canvas } = game
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height

    this.frameWidth = 49
    this.frameHeight = 54

    this.reset()
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.frameWidth,
      this.frameHeight,
      this.destinationX,
      this.destinationY,
      this.frameWidth,
      this.frameHeight
    )
  }

  /**
   * @param {number} timeStamp
   * @param {number} deltaTime
   */
  update(timeStamp, deltaTime) {
    // Exactement le même code que dans le Player
    const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength
    this.sourceX = frameIndex * this.frameWidth

    // Quasiment le même code que dans le Background
    this.destinationX -= (deltaTime * this.speed) / 1000
    if (this.destinationX <= -this.frameWidth) this.isActive = false
  }

  reset = () => {
    this.isActive = true
    this.destinationX = this.canvasWidth
    this.destinationY = Math.random() * (this.canvasHeight - this.frameHeight)
    this.speed = Math.random() * 50 + 100
  }
}
