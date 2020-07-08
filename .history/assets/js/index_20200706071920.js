class canvasAPI{
  constructor(){
    console.log(`siema`);
    this.canvas = null;

    this.UiSelectors = {
      canvas : `[data-canvas]`,
    }
  }
  init(){
    this.canvas = document.querySelector(this.UiSelectors.canvas);
  }

  setup() {
    let myCanvas = createCanvas(100, 100);
    myCanvas.parent(this.canvas)
    resizeCanvas(this.canvas.offsetHeight, this.canvas.offsetWidth)
    this.draw();
  }



  draw() {
    myCanvas.background(200);
  }



}

