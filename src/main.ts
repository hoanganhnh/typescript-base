/* eslint-disable max-classes-per-file */
import 'reflect-metadata';

const metadataKey = 'design:type';

class Point {
    // eslint-disable-next-line no-useless-constructor
    constructor(public x: number, public y: number) {}
}

function validate<T>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>,
) {
    const set = descriptor.set!;

    descriptor.set = function (value: T) {
        const type = Reflect.getMetadata(metadataKey, target, propertyKey);

        if (!(value instanceof type)) {
            throw new TypeError(
                `Invalid type, got ${typeof value} not ${type.name}.`,
            );
        }

        set.call(this, value);
    };
}

class Line {
    private _start!: Point;

    private _end!: Point;

    @validate
    @Reflect.metadata(metadataKey, Point)
    set start(value: Point) {
        this._start = value;
    }

    get start() {
        return this._start;
    }

    @validate
    @Reflect.metadata(metadataKey, Point)
    set end(value: Point) {
        this._end = value;
    }

    get end() {
        return this._end;
    }
}

const line = new Line();
line.start = new Point(1, 2);
console.log(line.start);
