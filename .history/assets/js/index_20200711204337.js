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
    fill(0)
  } else {
    fill(255)
  }
  ellipse(mouseX, mouseY, 10, 10)
}

