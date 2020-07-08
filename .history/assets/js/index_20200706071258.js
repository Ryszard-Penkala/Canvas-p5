class CanvasAPI{
  constructor(){
    this.canvas = null;

    this.UiSelectors = {
      canvas : `[data-canvas]`,
    }

    this.init();
  }
  init(){
    this.canvas = document.querySelector(this.UiSelectors.canvas);
    this.setup();
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

