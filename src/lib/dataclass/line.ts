import { Coordinate } from "../common";

export class LineData {
    start: Coordinate;
    end: Coordinate;
    width: number;

    constructor(start: [number, number], end: [number, number], width: number) {
        this.start = new Coordinate(start[0], start[1]);
        this.end = new Coordinate(end[0] , end[1]);
        this.width = width;
    }
}