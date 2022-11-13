import { Application } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

import { get_lib, symbol_instance } from './parse_mock';
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

const WORLD_WIDTH = 2000
const WORLD_HEIGHT = 2000

const kiapp = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xF5F4EF,
	width: window.innerWidth,
	height: window.innerHeight,
    antialias:true,
});
kiapp.stage.interactive = true;


const sch_view = new Viewport({
    worldWidth: WORLD_WIDTH,
    worldHeight: WORLD_HEIGHT,
    interaction: kiapp.renderer.plugins.interaction,
    divWheel: kiapp.view as any,
});
kiapp.stage.addChild(sch_view);

sch_view
    .drag()
    .pinch()
    .wheel();

const libraries = get_lib();
const components = symbol_instance();
sch_render(libraries, components, sch_view);
