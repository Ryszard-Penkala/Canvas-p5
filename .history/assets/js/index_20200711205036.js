UiSelectors = {
  dataCanvas : `[data-canvas]`
}

const dataCanvas = document.querySelector(UiSelectors.dataCanvas);

function setup() {
  const canvas = createCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight);
  canvas.background(100);
  canvas.parent(dataCanvas);
}

function draw(){
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 10, 10)
    fill(0)
  }

}

