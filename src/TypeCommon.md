### The primitives: `string`, `number`, `boolean`, `null`, `undefined`, `Symbol`

### Array:

-   syntax: `type[]` or `Array<type>`

### Any and [noImplicitAny]('https://www.typescriptlang.org/tsconfig#noImplicitAny):

### Type Annotations on Variables:

<br/>

```typescript
    // ex:
    // No type annotation needed -- 'myName' inferred as type 'string'
    let myName = 'Alice';
```

### Functions:

-   Parameter Type Annotations

```typescript
    // Parameter type annotation
    function greet(name: string) {
        console.log('Hello, ' + name.toUpperCase() + '!!');
    }
```

- Return Type Annotations

```typescript
    function getFavoriteNumber(): number {
        return 26;
    }
```

- Anonymous Functions:

    `contextual typing`

### Object Types:
```typescript
    // The parameter's type annotation is an object type
    function printCoord(pt: { x: number; y: number }) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }
    printCoord({ x: 3, y: 7 });
```

- Optional Properties

```typescript
    function printName(obj: { first: string; last?: string }) {
        // ...
    }
    // Both OK
    printName({ first: "Bob" });
    printName({ first: "Alice", last: "Alisson" });
```

### Union Types:


```typescript
    function printId(id: number | string) {
        if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
        } else {
            // Here, id is of type 'number'
            console.log(id);
        }
    }

    function welcomePeople(x: string[] | string) {
        if (Array.isArray(x)) {
            // Here: 'x' is 'string[]'
            console.log("Hello, " + x.join(" and "));
        } else {
            // Here: 'x' is 'string'
            console.log("Welcome lone traveler " + x);
        }
    }
```

### Type Aliases:

- object types and union types by writing them directly in type annotations

```typescript
    type Point = {
        x: number;
        y: number;
    };

    // Exactly the same as the earlier example
    function printCoord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    printCoord({ x: 100, y: 100 });

    type ID = number | string;

    type UserInputSanitizedString = string;
    function sanitizeInput(str: string): UserInputSanitizedString {
        return sanitize(str);
    }
```

### Interfaces:
```typescript
    interface Point {
        x: number;
        y: number;
    }

    function printCoord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    printCoord({ x: 100, y: 100 });
```

- [Differences Between **Type Aliases** and **Interfaces**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

### Type Assertions:

```typescript
    const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
    // equivalent
    const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

### Literal Types:
```typescript
    let x: "hello" = "hello";
    // OK
    x = "hello";
    // combining literals into unions:
    function printText(s: string, alignment: "left" | "right" | "center") {
        // ...
    }
    printText("Hello, world", "left");
```

[**Literal Inference**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference)

You can use `as const` to convert the entire object to be type literals:

```typescript
    const req = { url: "https://example.com", method: "GET" } as const;

    handleRequest(req.url, req.method);
```

### [strictNullChecks](https://www.typescriptlang.org/tsconfig/#strictNullChecks):

Non-null Assertion Operator (Postfix`!`): removing null and undefined from a type without doing any explicit checking

```typescript
    function liveDangerously(x?: number | null) {
        // No error
        console.log(x!.toFixed());
    }
```

### [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)