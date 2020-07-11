const UiSelectors = {
  dataCanvas : `[data-canvas]`,
  dataClear : `[data-clear]`,
  dataSave : `[data-save]`,
}

const dataCanvas = document.querySelector(UiSelectors.dataCanvas);
const dataClear = document.querySelector(UiSelectors.dataClear);
const dataSave = document.querySelector(UiSelectors.dataSave);

dataClear.addEventListener("click", ()=>{
  canvas.background(200);
})



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

