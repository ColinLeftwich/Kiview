import { Coordinate } from "../common";
import { ArcSymbol, CircleSymbol, RectangleSymbol, PinSymbol } from "./graphics";

export class SymbolDefinition {
    readonly LIBRARY_ID: string;
    readonly UNIT_ID: string;
    in_bom: boolean;
    on_board: boolean;
    graphics: Graphics;
    pins: Array<PinSymbol>;

    constructor(lib_id: string, unit_id: string, in_bom: boolean, on_board: boolean, graphics: Graphics, pins: Array<PinSymbol>) {
        this.LIBRARY_ID = lib_id;
        this.UNIT_ID = unit_id;
        this.in_bom = in_bom;
        this.on_board = on_board;
        this.graphics = graphics
        this.pins = pins;
    }
}

export class Graphics {
    arcs: Array<ArcSymbol>;
    circles: Array<CircleSymbol>;
    rectangles: Array<RectangleSymbol>;

    constructor(arcs: Array<ArcSymbol>, circles: Array<CircleSymbol>, rectangles: Array<RectangleSymbol>) {
        this.arcs = arcs;
        this.circles = circles;
        this.rectangles = rectangles;
    }
}

export class SymbolInstance {
    readonly LIBRARY_ID: string;
    readonly UNIT_ID: string;
    pos: Coordinate;
    angle: number;
    in_bom: boolean;
    on_board: boolean;

    constructor(lib_id: string, unit_id: string, pos: [number, number], angle: number, in_bom: boolean, on_board: boolean) {
        this.LIBRARY_ID = lib_id;
        this.UNIT_ID = unit_id;
        this.pos = new Coordinate(pos[0], pos[1]);
        this.angle = angle;
        this.in_bom = in_bom;
        this.on_board = on_board;
    }
}