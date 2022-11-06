import { Application } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

import { RectangleData, LineData } from './dataclass'
import { sch_render } from './sch_render';

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

//(symbol (lib_id "Device:R") (at 36.83 24.13 0) (unit 1)
//(symbol (lib_id "Device:R") (at 44.45 24.13 90) (unit 1)
let rec_data_1 = new RectangleData([-1.016, -2.54], [1.016, 2.54], [36.83, 24.13], 0.254, 0);
let rec_data_2 = new RectangleData([-1.016, -2.54], [1.016, 2.54], [44.45, 24.13], 0.254, 90);
let rec_arr: Array<RectangleData> = [rec_data_1, rec_data_2];

//(wire (pts (xy 36.83 20.32) (xy 36.83 16.51))
//(wire (pts (xy 31.75 16.51) (xy 36.83 16.51))
let wire_data_1 = new LineData([36.83, 20.32], [36.83, 16.51], 0.15);
let wire_data_2 = new LineData([31.75, 16.51], [36.83, 16.51], 0.15);
let wire_arr: Array<LineData> = [wire_data_1, wire_data_2];

sch_render(sch_view, rec_arr, wire_arr);
