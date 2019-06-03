class Background {
  public canvas: any
  public ctx: any
  public row: number
  public col: number
  public r: number

  constructor() {
    this.canvas = document.querySelector('#canvas');
    // 宽高自适应
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // 获取2d上下文
    this.ctx = this.canvas.getContext('2d');

    this.r = 0.5;
    this.init();
  }
  public drawPoint(x: any, y: any) {
    this.ctx.beginPath(); // 开启绘制路径
    this.ctx.arc(x, y, this.r, 0, 2*Math.PI); // 绘制圆 参数依次为 圆的横坐标/纵坐标/半径/绘制圆的起始位置/绘制圆的弧度大小
    this.ctx.fillStyle = "rgba(255, 255, 255, .8)"; // 设置填充颜色
    this.ctx.fill(); // 填充颜色
    this.ctx.closePath(); // 关闭绘制路径
  }
  public init() {
    this.row = (this.canvas.height / 20);
    this.col = (this.canvas.width / 20);
    console.log(this.row)
    console.log(this.col)
    for (let i = 1; i < this.row; i++) {
      for (let j = 1; j < this.col; j++) {
        this.drawPoint(i*20, j*20)
      }
    }
  }
}

// export default new Background();