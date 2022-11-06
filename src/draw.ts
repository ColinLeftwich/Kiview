import { Container, Graphics } from 'pixi.js'
import { RectangleData, LineData } from './dataclass'

const MM_TO_PX = (length: number):number => {
    return length / 0.1
}

export const drawRectangle = (rectangle: RectangleData) => {
    let rectangle_container = new Container();

    let rectangle_graphic = new Graphics();
    rectangle_graphic.beginFill(0x840000);
    rectangle_graphic.drawRoundedRect(MM_TO_PX(rectangle.outer.pos.x), MM_TO_PX(rectangle.outer.pos.y), MM_TO_PX(rectangle.outer.width), MM_TO_PX(rectangle.outer.height), MM_TO_PX(rectangle.line_width));
    rectangle_graphic.endFill();

    rectangle_graphic.beginHole();
    rectangle_graphic.drawRect(MM_TO_PX(rectangle.inner.pos.x), MM_TO_PX(rectangle.inner.pos.y), MM_TO_PX(rectangle.inner.width), MM_TO_PX(rectangle.inner.height));
    rectangle_graphic.endHole();
    
    rectangle_container.addChild(rectangle_graphic);
    rectangle_container.angle = 0;
    return rectangle_container;
}

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