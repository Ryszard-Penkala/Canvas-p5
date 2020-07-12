const UiSelectors = {
  dataCanvas : `[data-canvas]`,
  dataClear : `[data-clear]`,
  dataSave : `[data-save]`,
  dataPencilSize : `[data-pencil-size-picker]`,
  dataPencilColor : `[data-pencil-color-picker]`,
  dataBgColor : `[data-bg-color-picker]`,
}

let pencilColor
let canvas = null;
let strokeSize = null;
let backgroundColor = 100
const fileName = 'myCanvas';
const fileFormat = 'jpg';
const dataCanvas = document.querySelector(UiSelectors.dataCanvas);
const dataClear = document.querySelector(UiSelectors.dataClear);
const dataSave = document.querySelector(UiSelectors.dataSave);
const dataPencilSize = document.querySelector(UiSelectors.dataPencilSize);
const dataPencilColor = document.querySelector(UiSelectors.dataPencilColor);


pencilColor = dataPencilColor.value;
console.log(pencilColor);

dataPencilSize.addEventListener("change", ()=>{
  settingStrokeSize(dataPencilSize.value);
})

dataClear.addEventListener("click", ()=>{
  dataPencilSize.value = 10;
  dataPencilColor.value = `#000000`;
  backgroundColor = 100;
  clear();
})

dataSave.addEventListener("click", ()=>{
  saveCanvas(canvas, fileName, fileFormat);
})

function setup() {
  canvas = createCanvas(dataCanvas.offsetWidth, dataCanvas.offsetHeight);
  settingBackground(backgroundColor);
  canvas.parent(dataCanvas);
  settingStrokeSize(dataPencilSize.value);
}

function settingStrokeSize(size){
  canvas.strokeWeight(size);
}

function settingBackground(color){
  canvas.background(color);
}

function draw(){
  canvas.stroke(dataPencilColor.value);
  canvas.strokeWeight(dataPencilSize.value)
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

