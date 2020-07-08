class canvasAPI{
  constructor(){
    console.log(`siema`);
    this.canvas = null;

    this.UiSelectors = {
      canvas : `[data-canvas]`,
    }
  }
  init(){
    this.canvas = document.querySelector(this.UiSelectors.canvas);
    this.setup();
  }

  setup() {
    let myCanvas = createCanvas(100, 100);
    background(200);
  }

}

