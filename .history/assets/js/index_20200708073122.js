UiSelectors = {
  dataCanvas : `[data-canvas]`
}

const dataCanvas = document.querySelector(UiSelectors.dataCanvas);

function setup() {
  const canvas = createCanvas(100,100);
  background(100);
  canvas.parent(dataCanvas)
  canvas.resizeCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight)
}


