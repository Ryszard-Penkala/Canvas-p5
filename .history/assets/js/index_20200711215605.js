const UiSelectors = {
  dataCanvas : `[data-canvas]`,
  dataClear : `[data-clear]`,
  dataSave : `[data-save]`,
  dataPencil : `[data-pencil-color-picker]`
}

let canvas = null;
let strokeColor = 100;
const fileName = 'myCanvas';
const fileFormat = 'jpg';
const dataCanvas = document.querySelector(UiSelectors.dataCanvas);
const dataClear = document.querySelector(UiSelectors.dataClear);
const dataSave = document.querySelector(UiSelectors.dataSave);
const dataPencil = document.querySelector(UiSelectors.dataPencil);


dataClear.addEventListener("click", ()=>{
  settingBackground(100);
})

dataSave.addEventListener("click", ()=>{
  saveCanvas(canvas, fileName, fileFormat);
})

dataPencil.addEventListener("input", ()=>{
  strokeColor = input.target.value;
})



function setup() {
  canvas = createCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight);
  settingBackground(100);
  canvas.parent(dataCanvas);
}

function settingBackground(color){
  canvas.background(color);
}

function draw(){
  stroke(strokeColor);
  strokeWeight(10);
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

