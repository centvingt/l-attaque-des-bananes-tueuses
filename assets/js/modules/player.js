export class Player {
  sourceX = 0
  sourceY = 0
  frameWidth = 94
  frameHeight = 72
  destinationX = 25
  destinationY = 100

  fps = 1000 / 12 // 1s pour 12 frames (la cadence de l’animation)
  framesLength = 8 // Nombre de frames dans la ligne de la spritesheet

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.image = new Image()
    this.image.src = './assets/img/player-spritesheet.png'

    this.ctx = ctx
  }

  draw() {
    // La source c’est le fichier .png
    // La destination c’est le canvas
    this.ctx.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.frameWidth, // cadrage dans la source
      this.frameHeight, // cadrage dans la source
      this.destinationX,
      this.destinationY,
      this.frameWidth, // dimension dans la destination
      this.frameHeight // dimension dans la destination
    )
  }

  /**
   * @param {number} timeStamp
   */
  update(timeStamp) {
    const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength
    this.sourceX = frameIndex * this.frameWidth
  }
}
