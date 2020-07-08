UiSelectors = {
  dataCanvas : `[data-canvas]`
}

function setup() {
  const canvas = createCanvas(100,100);
  background(100);
  canvas.parent(document.querySelector(UiSelectors.dataCanvas))
}


