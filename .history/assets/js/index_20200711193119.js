UiSelectors = {
  dataCanvas : `[data-canvas]`
}

const dataCanvas = document.querySelector(UiSelectors.dataCanvas);

function setup() {
  const canvas = createCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight);
  canvas.background(50);
  canvas.parent(dataCanvas);
}


