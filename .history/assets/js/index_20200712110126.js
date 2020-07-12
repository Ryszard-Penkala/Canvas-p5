const UiSelectors = {
  dataCanvas : `[data-canvas]`,
  dataClear : `[data-clear]`,
  dataSave : `[data-save]`,
  dataPencilSize : `[data-pencil-size-picker]`,
  dataPencilColor : `[data-pencil-color-picker]`,
  dataBgColor : `[data-bg-color-picker]`,
}

let canvas = null;
let backgroundColor = 100
const fileName = 'myCanvas';
const fileFormat = 'jpg';
const dataCanvas = document.querySelector(UiSelectors.dataCanvas);
const dataClear = document.querySelector(UiSelectors.dataClear);
const dataSave = document.querySelector(UiSelectors.dataSave);
const dataPencilSize = document.querySelector(UiSelectors.dataPencilSize);
const dataPencilColor = document.querySelector(UiSelectors.dataPencilColor);
const dataBgColor = document.querySelector(UiSelectors.dataBgColor);

dataClear.addEventListener("click", ()=>{
  dataPencilSize.value = 10;
  dataPencilColor.value = `#000000`;
  dataBgColor.value = `#ffffff`;
  clear();
})

dataSave.addEventListener("click", ()=>{
  saveCanvas(canvas, fileName, fileFormat);
})

function setup() {
  canvas = createCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight);
  canvas.background(dataBgColor.value);
  canvas.parent(dataCanvas);
}

function draw(){
  canvas.stroke(dataPencilColor.value);
  canvas.strokeWeight(dataPencilSize.value)
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

