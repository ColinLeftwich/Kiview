export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Stroke {
    width: number;
    line_type: StrokeStyle;

    constructor(width: number, line_type: StrokeStyleStrings) {
        this.width = width;
        this.line_type = StrokeStyle[line_type];
    }
}

type StrokeStyleStrings = keyof typeof StrokeStyle;

enum StrokeStyle {
    dash,
    dash_dot,
    dash_dot_dot,
    dot,
    default,
    solid,
}