import { Container } from 'pixi.js';
import { Viewport } from 'pixi-viewport';

import { SymbolInstance } from './lib/symbols/symbol';
import { Libraries } from './parse_mock';

import { RectangleData } from './lib/dataclass/rectangle';
import { drawRectangle } from "./draw";
import { PinData } from './lib/dataclass/pin';

export const sch_render = (libraries: Libraries, components: Array<SymbolInstance>, sch_view: Viewport) => {
    for (let index in components) {
        let component = components[index];
        let symbol = libraries.get_symbol(component.LIBRARY_ID, component.UNIT_ID)

        const component_container = new Container()

        if (symbol.graphics.arcs.length !== 0) {
            for (let index in symbol.graphics.arcs) {
                let _arc_symbol = symbol.graphics.arcs[index];
                // TODO 
                // Create ArcDataClass
                // Create drawArc function
            }
        }

        if (symbol.graphics.circles.length !== 0) {
            for (let index in symbol.graphics.circles) {
                let _circle_symbol = symbol.graphics.circles[index];
                // TODO 
                // Create CircleDataClass
                // Create drawCircle function
            }
        }

        if (symbol.graphics.rectangles.length !== 0) {
            for (let index in symbol.graphics.rectangles) {
                let rectangle_symbol = symbol.graphics.rectangles[index];
                let rectangle_data = new RectangleData(component, rectangle_symbol);

                let rectangle_graphic = drawRectangle(rectangle_data)
                component_container.addChild(rectangle_graphic)
            }
        }

        if (symbol.pins.length !== 0) {
            for (let index in symbol.pins) {
                // let pin_symbol = symbol.pins[index];
                // let pin_data = new PinData(component, pin_symbol);

                // let pin_graphic = drawPin(pin_data);
                // component_container.addChild(pin_graphic);
            }
        }

        sch_view.addChild(component_container)
    }
}