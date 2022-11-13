import { SymbolDefinition, Graphics, SymbolInstance } from "./lib/symbols/symbol";
import { ArcSymbol, CircleSymbol, RectangleSymbol, PinSymbol } from "./lib/symbols/graphics";

export const get_lib = (): Libraries => {
    //(lib_symbols
    //(symbol "Device:R" (pin_numbers hide) (pin_names (offset 0)) (in_bom yes) (on_board yes)
    // (symbol "R_0_1"
    //     (rectangle(start - 1.016 - 2.54)(end 1.016 2.54)
    //         (stroke(width 0.254)(type default )(color 0 0 0 0))
    //         (fill(type none))
    //     )
    // )
    // (symbol "R_1_1"
    //     (pin passive line(at 0 3.81 270)(length 1.27)
    //     (pin passive line(at 0 - 3.81 90)(length 1.27)
    // )
    let arc_array: Array<ArcSymbol> = [

    ];
    let circle_array: Array<CircleSymbol> = [

    ];
    let rec_array: Array<RectangleSymbol> = [
        new RectangleSymbol([-1.016, -2.54], [1.016, 2.54])
    ];
    let pins_array: Array<PinSymbol> = [
        new PinSymbol("passive", "line", [0, 3.81], 1.27, 270),
        new PinSymbol("passive", "line", [0, -3.81], 1.27, 90)
    ]

    let graphics = new Graphics(arc_array, circle_array, rec_array);
    let resistor_def = new SymbolDefinition("Device", "R", true, true, graphics, pins_array)

    let symbols: Array<SymbolDefinition> = [
        resistor_def
    ]
    let libraries: Array<Library> = [
        new Library(symbols, "Device")
    ]
    return new Libraries(libraries)
}

export const symbol_instance = (): Array<SymbolInstance> => {
    // (symbol (lib_id "Device:R") (at 59.69 38.1 90) (unit 1)
    //   (in_bom yes) (on_board yes) (fields_autoplaced)

    let r_1 = new SymbolInstance("Device", "R", [59.69, 38.1], 90, true, true)

    // (symbol (lib_id "Device:R") (at 72.39 38.1 90) (unit 1)
    //   (in_bom yes) (on_board yes) (fields_autoplaced)
    let r_2 = new SymbolInstance("Device", "R", [72.39, 38.1], 90, true, true)

    let symbols: Array<SymbolInstance> = [r_1, r_2]
    return symbols
}

export class Libraries {
    __lib: { [index: string]: Library } = {};

    constructor(libraries: Array<Library>) {
        for (let index in libraries) {
            let library = libraries[index];
            this.__lib[library.id] = library;
        }
    }

    get_library(lib_id: string): Library {
        return this.__lib[lib_id]
    }

    get_symbol(lib_id: string, unit_id: string): SymbolDefinition {
        let library: Library = this.__lib[lib_id];
        return library.get_symbol(unit_id)
    }
}

class Library {
    __symbol: { [index: string]: SymbolDefinition } = {};
    id: string;

    constructor(symbols: Array<SymbolDefinition>, id: string) {
        this.id = id;
        for (let index in symbols) {
            let symbol = symbols[index];
            this.__symbol[symbol.UNIT_ID] = symbol
        }
    }

    get_symbol(unit_id: string): SymbolDefinition {
        return this.__symbol[unit_id]
    }
}

