class CanvasAPI{
  constructor(){
    this.canvas = null;

    this.UiSelectors = {
      canvas : `[data-canvas]`,
    }
  }
  init(){
    this.canvas = document.querySelector(this.UiSelectors.canvas);
  }

  function setup() {
    let myCanvas = createCanvas(100, 100);
    myCanvas.parent(this.canvas)
    resizeCanvas(this.canvas.offsetHeight, this.canvas.offsetWidth)
    this.draw();
  }



  function draw() {
    background(200);
  }



}

