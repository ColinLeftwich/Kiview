import { Coordinate } from "../common";
import { RectangleSymbol } from "../symbols/graphics";
import { SymbolInstance } from "../symbols/symbol";

class RectangleFrameData {
    start: Coordinate;
    end: Coordinate;

    constructor(start: [number, number], end: [number, number]) {
        this.start = new Coordinate(start[0], start[1]);
        this.end = new Coordinate(end[0], end[1]);
    }
}

class RectangleGraphicData {
    pos: Coordinate;
    width: number;
    height: number;

    constructor(pos: [number, number], width: number, height: number) {
        this.pos = new Coordinate(pos[0], pos[1]);
        this.width = width;
        this.height = height;
    }

}

export class RectangleData {
    angle: number;
    line_width: number;
    center: Coordinate;
    pivot: Coordinate;
    frame: RectangleFrameData;
    outer: RectangleGraphicData;
    inner: RectangleGraphicData;

    constructor(component: SymbolInstance, symbol: RectangleSymbol) {
        this.angle = component.angle;
        this.line_width = 0.254;
        this.center = new Coordinate(component.pos.x, component.pos.y);

        let frame_start_x = this.center.x + symbol.start.x;
        let frame_start_y = this.center.y + symbol.start.y;
        let frame_end_x = this.center.x + symbol.end.x;
        let frame_end_y = this.center.y + symbol.end.y;
        this.frame = new RectangleFrameData([frame_start_x, frame_start_y], [frame_end_x, frame_end_y]);

        let outer_start_x = this.frame.start.x - (this.line_width / 2);
        let outer_start_y = this.frame.start.y - (this.line_width / 2);
        let outer_end_x = this.frame.end.x + (this.line_width / 2);
        let outer_end_y = this.frame.end.y + (this.line_width / 2);
        let outer_width = outer_end_x - outer_start_x;
        let outer_height = outer_end_y - outer_start_y;
        this.outer = new RectangleGraphicData([outer_start_x, outer_start_y], outer_width, outer_height);

        let inner_start_x = this.frame.start.x + (this.line_width / 2);
        let inner_start_y = this.frame.start.y + (this.line_width / 2);
        let inner_end_x = this.frame.end.x - (this.line_width / 2);
        let inner_end_y = this.frame.end.y - (this.line_width / 2);
        let inner_width = inner_end_x - inner_start_x;
        let inner_height = inner_end_y - inner_start_y;
        this.inner = new RectangleGraphicData([inner_start_x, inner_start_y], inner_width, inner_height);

        this.pivot = new Coordinate(this.outer.height / 2, this.outer.width / 2,);
    }
}