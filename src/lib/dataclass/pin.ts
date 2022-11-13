import { Coordinate } from "../common";
import { PinSymbol } from "../symbols/graphics";
import { SymbolInstance } from "../symbols/symbol";

export class PinData {
    start: Coordinate;
    end: Coordinate;
    length: number;
    width: number;
    angle: number;
    
    constructor(component: SymbolInstance, symbol: PinSymbol) {
        let start_x = component.pos.x - symbol.pos.x
        let start_y = component.pos.y - symbol.pos.y
        let end_x = component.pos.x - symbol.pos.x + symbol.length
        let end_y = component.pos.y - symbol.pos.y
        this.start = new Coordinate(start_x, start_y);
        this.end = new Coordinate(end_x, end_y);
        this.length = symbol.length
        this.width = 0.15;
        this.angle = symbol.angle
    }
}