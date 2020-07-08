console.log('siema');
const canvas = document.getElementById('canvasik');

class CanvasAPI{
  constructor(){
    this.canvas = null;

    this.UiSelectors = {
      canvas : `[data-canvas]`,
    }
  }
}

function setup() {
    let myCanvas = createCanvas(100, 100);
    myCanvas.parent(canvas)
    resizeCanvas(canvas.offsetHeight, canvas.offsetWidth)
}



function draw() {
    background(200);
  }