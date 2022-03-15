### Optional Properties

```typescript
interface PaintOptions {
    xPos?: number;
    yPos?: number;
    name: string;
}
```

### `readonly` Properties

```typescript
interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);

    // But we can't re-assign it.
    //   obj.prop = "hello";
    // Cannot assign to 'prop' because it is a read-only property.
}
```

### Index Signatures

```typescript
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['A', 'B'];

console.log(arr[0]); // A
```

### Extending Types

```typescript
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: 'red',
    radius: 42,
};
```

### Intersection Types

An intersection type is defined using the `&` operator.

```typescript
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

### Generic Object Types

```typescript
interface Box<Type> {
    contents: Type;
}

const box: Box<string> = {contents: 'hello'};
```

### `ReadonlyArray` Type

```typescript
function doStuff(values: readonly string[]) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // ...but we can't mutate 'values'.
    //   values.push("hello!");
    // Property 'push' does not exist on type 'readonly string[]'.
}
```

### Tuple Types

```typescript
function doSomething(pair: [string, number]) {
    const a = pair[0];

    const a: string;
    const b = pair[1];

    const b: number;
    // ...
}

doSomething(['hello', 42]);
```

### readonly Tuple Types

```typescript
function distanceFromOrigin([x, y]: readonly [number, number]) {
    // x = 1;
    // Cannot assign to '0' because it is a read-only property.
    return Math.sqrt(x ** 2 + y ** 2);
}
```
