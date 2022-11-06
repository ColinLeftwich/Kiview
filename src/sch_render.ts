import { Viewport } from 'pixi-viewport';
import { RectangleData, LineData } from './dataclass'
import { drawRectangle, drawWire } from "./draw";

export const sch_render = (sch_view: Viewport, rec_arr: Array<RectangleData>, wire_arr: Array<LineData>) => {
    for (var index in rec_arr) {
        let rec_graphic = drawRectangle(rec_arr[index]);
        sch_view.addChild(rec_graphic);
    }

    for (var index in wire_arr) {
        let wire_graphic = drawWire(wire_arr[index]);
        sch_view.addChild(wire_graphic);
    }
}

