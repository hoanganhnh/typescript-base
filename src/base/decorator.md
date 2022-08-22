### Decorators
-  a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
- decorator được dùng theo mẫu `@expression`, trong đó `expression` phải đánh giá một hàm sẽ đc gọi trong lúc runtime với thông tin về decorated declaration

### Decorator Composition
```typescript
    // when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).
    @f
    @g
    x

    function first() {
        console.log("first(): factory evaluated");
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("first(): called");
        };
    }

    function second() {
        console.log("second(): factory evaluated");
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("second(): called");
        };
    }

    class ExampleClass {
        @first()
        @second()
        method() {}
    }
/**
    first(): factory evaluated
    second(): factory evaluated
    second(): called
    first(): called
*/

```

### Property Decorators

```typescript
    import 'reflect-metadata';

    const formatMetadataKey = Symbol('format');

    function format(formatString: string) {
        return Reflect.metadata(formatMetadataKey, formatString);
    }

    function getFormat(target: any, propertyKey: string) {
        return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
    }
    class Greeter {
        @format('Hello, %s')
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
        }

        greet() {
            const formatString = getFormat(this, 'greeting');
            return formatString.replace('%s', this.greeting);
        }
    }

    const greet = new Greeter('Hoang Anh');
    console.log(greet.greet()); // Hello, Hoang Anh
```

### [Parameter Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators)

### [Metadata](https://www.typescriptlang.org/docs/handbook/decorators.html#metadata)

```ts
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
console.log(line.start); // Point { x: 1, y: 2 }
line.start = { x: 0, y: 0}; // ERROR

```