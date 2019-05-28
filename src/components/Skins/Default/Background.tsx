class Background {
  public canvas: any
  public ctx: any

  constructor() {
    this.canvas = document.querySelector('#canvas');
    // 宽高自适应
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // 获取2d上下文
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }
  public draw() {
    this.ctx.rotate(Math.random() * 2 * Math.PI);
    this.ctx.fillStyle = "rgb(200,0,0)";
    this.ctx.fillRect (10, 10, 55, 50);

    this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    this.ctx.fillRect (30, 30, 55, 50);
  }
}

export default new Background();