const UiSelectors = {
  dataCanvas : `[data-canvas]`,
  dataClear : `[data-clear]`,
  dataSave : `[data-save]`,
}

let canvas = null;
const dataCanvas = document.querySelector(UiSelectors.dataCanvas);
const dataClear = document.querySelector(UiSelectors.dataClear);
const dataSave = document.querySelector(UiSelectors.dataSave);

function settingBackground(color){
  background(color);
}

dataClear.addEventListener("click", ()=>{
  settingBackground(100);
})



function setup() {
  canvas = createCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight);
  settingBackground(100);
  canvas.parent(dataCanvas);
}

function draw(){
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 10, 10)
    fill(0)
  }

}

