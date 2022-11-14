import { Container, Graphics } from 'pixi.js'
import { RectangleData } from './lib/dataclass/rectangle'
import { LineData } from './lib/dataclass/line'
// import { PinData } from './lib/dataclass/pin'

function MM_TO_PX(length: number): number {
    return length / 0.1
}

export const drawRectangle = (rectangle: RectangleData): Container => {
    // Make container
    let rectangle_container = new Container();

    // Set container to location of rectangle
    rectangle_container.x = MM_TO_PX(rectangle.outer.pos.x);
    rectangle_container.y = MM_TO_PX(rectangle.outer.pos.y);

    // Create rectangle graphic at (0,0)
    let rectangle_graphic = new Graphics();
    rectangle_graphic.beginFill(0x840000);
    rectangle_graphic.drawRoundedRect(0, 0, MM_TO_PX(rectangle.outer.width), MM_TO_PX(rectangle.outer.height), MM_TO_PX(rectangle.line_width / 2));
    rectangle_graphic.endFill();

    // Cute hole through rectangle
    rectangle_graphic.beginHole();
    rectangle_graphic.drawRect(MM_TO_PX(rectangle.line_width), MM_TO_PX(rectangle.line_width), MM_TO_PX(rectangle.inner.width), MM_TO_PX(rectangle.inner.height));
    rectangle_graphic.endHole();

    // Set pivot point to half the width and height
    rectangle_graphic.pivot.x = MM_TO_PX(rectangle.outer.width / 2);
    rectangle_graphic.pivot.y = MM_TO_PX(rectangle.outer.height / 2);


    // Offset rectangle position in container by the half the width and height
    rectangle_graphic.x = MM_TO_PX(rectangle.outer.width / 2);
    rectangle_graphic.y = MM_TO_PX(rectangle.outer.height / 2);

    // Set angle of rectangle graphic 
    rectangle_graphic.angle = rectangle.angle;

    rectangle_container.addChild(rectangle_graphic);
    return rectangle_container;
}
/*
export const drawPin = (pin: PinData): Container => {
    let pin_container = new Container();

    let line_container = new Container();

    // Set container to location of pin
    line_container.x = MM_TO_PX(pin.start.x - (pin.width / 2));
    line_container.y = MM_TO_PX(pin.start.y - (pin.width / 2));

    let line_graphic = new Graphics();
    line_graphic.lineStyle(MM_TO_PX(pin.width), 0x009600);
    line_graphic.moveTo(MM_TO_PX(pin.start.x), MM_TO_PX(pin.start.y));
    line_graphic.lineTo(MM_TO_PX(pin.end.x), MM_TO_PX(pin.end.y));

    // Offset rectangle position in container by the half the width and height
    line_graphic.x = MM_TO_PX(pin.width / 2);
    line_graphic.y = MM_TO_PX(pin.length / 2);

    line_graphic.pivot.x = MM_TO_PX(pin.width / 2);
    line_graphic.pivot.y = MM_TO_PX(pin.length / 2);

    line_container.addChild(line_graphic)
    //line_graphic.angle = pin.angle

    let pin_end_graphic = new Graphics();
    pin_end_graphic.beginFill(0x009600);
    pin_end_graphic.drawCircle(MM_TO_PX(pin.start.x), MM_TO_PX(pin.start.y), MM_TO_PX(pin.width / 2));
    pin_end_graphic.drawCircle(MM_TO_PX(pin.end.x), MM_TO_PX(pin.end.y), MM_TO_PX(pin.width / 2));
    pin_end_graphic.endFill();

    pin_container.addChild(line_graphic, pin_end_graphic);

    return pin_container
}
*/

export const drawWire = (wire: LineData): Container => {
    let wire_container = new Container();

    let line_graphic = new Graphics();
    line_graphic.lineStyle(MM_TO_PX(wire.width), 0x009600);
    line_graphic.moveTo(MM_TO_PX(wire.start.x), MM_TO_PX(wire.start.y));
    line_graphic.lineTo(MM_TO_PX(wire.end.x), MM_TO_PX(wire.end.y));

    let wire_end_graphic = new Graphics();
    wire_end_graphic.beginFill(0x009600);
    wire_end_graphic.drawCircle(MM_TO_PX(wire.start.x), MM_TO_PX(wire.start.y), MM_TO_PX(wire.width / 2));
    wire_end_graphic.drawCircle(MM_TO_PX(wire.end.x), MM_TO_PX(wire.end.y), MM_TO_PX(wire.width / 2));
    wire_end_graphic.endFill();

    wire_container.addChild(line_graphic, wire_end_graphic);
    return wire_container
}