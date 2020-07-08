class CanvasAPI{
  constructor(){
    this.canvas = null;

    this.UiSelectors = {
      canvas : `[data-canvas]`,
    }
  }
  init(){
    this.canvas = document.querySelector(this.UiSelectors.canvas);
    this.setup();
  }

  function setup() {
    let myCanvas = createCanvas(100, 100);
    myCanvas.parent(canvas)
    resizeCanvas(canvas.offsetHeight, canvas.offsetWidth)
  }



  function draw() {
    background(200);
  }



}

