import { Application } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

class Kiview extends HTMLElement {
    //canvas: HTMLCanvasElement

    constructor() {
        super();
        //this.canvas = document.createElement('canvas');
        //this.canvas.id = "pixi-canvas";
        this.insertAdjacentHTML('afterbegin', "<canvas id='pixi-canvas'/>");
        //document.body.appendChild(this.canvas);
    }
}

window.customElements.define('ki-view', Kiview);

const WIDTH = 297;
const HEIGHT = 210;

const MM_TO_PX = (length: number):number => {
    return length / 0.1
}

let canvas = document.getElementById("pixi-canvas") as HTMLCanvasElement
console.log(canvas);

const kiapp = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xF5F4EF,
	width: 640,
	height: 480,
    antialias:true,
});

const sch_view = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: MM_TO_PX(WIDTH),
    worldHeight: MM_TO_PX(HEIGHT),
    interaction: kiapp.renderer.plugins.interaction 
});

kiapp.stage.addChild(sch_view);

sch_view
    .drag()
    .pinch()
    .wheel();
