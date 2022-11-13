import { Coordinate } from "../common";

export class ArcSymbol {
    start: Coordinate;
    mid: Coordinate;
    end: Coordinate;

    constructor(start: [number, number], mid: [number, number], end: [number, number]) {
        this.start = new Coordinate(start[0], start[1])
        this.mid = new Coordinate(mid[0], mid[1])
        this.end = new Coordinate(end[0], end[1])
    }
}

export class CircleSymbol {
    center: Coordinate;
    radius: number;

    constructor(center: [number, number], radius: number) {
        this.center = new Coordinate(center[0], center[1]);
        this.radius = radius;
    }
}

// Symbol Line
// 
// The polyline token defines one or more graphical lines that may or may not define a polygon.
// 
//   (polyline
//     COORDINATE_POINT_LIST                                       
//     STROKE_DEFINITION                                           
//     FILL_DEFINITION                                             
//   )
// 
// 	The COORDINATE_POINT_LIST defines the list of X/Y coordinates of the line(s). There must be a minimum of two points.
// 	The STROKE_DEFINITION defines how the polygon formed by the lines outline is drawn.
// 	The fill token attributes define how the polygon formed by the lines is filled.
/*
class Polyline {
    coord: Array<Coordinate>;

    constructor() {

    }
}
*/

export class RectangleSymbol {
    start: Coordinate;
    end: Coordinate;

    constructor(start: [number, number], end: [number, number]) {
        this.start = new Coordinate(start[0], start[1]);
        this.end = new Coordinate(end[0], end[1]);
    }
}

export class PinSymbol {
    type: EletricalType;
    display: GraphicalType;
    pos: Coordinate
    length: number;
    angle: number;

    constructor(type: EltricalTypeStrings, display: GraphicalTypeStrings, pos: [number, number], length: number, angle: number) {
        this.type = EletricalType[type];
        this.display = GraphicalType[display];
        this.pos = new Coordinate(pos[0], pos[1])
        this.length = length;
        this.angle = angle;
    }
}

type EltricalTypeStrings = keyof typeof EletricalType;
type GraphicalTypeStrings = keyof typeof GraphicalType;

enum EletricalType {
    input,          //Pin is an input.
    output,         //Pin is an output.
    bidirectional,  //Pin can be both input and output.
    tri_state,      //Pin is a tri-state output.
    passive,        //Pin is electrically passive.
    free,           //Not internally connected.
    unspecified,    //Pin does not have a specified electrical type.
    power_in,       //Pin is a power input.
    power_out,      //Pin is a power output.
    open_collector, //Pin is an open collector output.
    open_emitter,   //Pin is an open emitter output.
    no_connect
}

enum GraphicalType {
    line,
    inverted,
    clock,
    inverted_clock,
    input_low,
    clock_low,
    output_low,
    edge_clock_high,
    non_logic,
}