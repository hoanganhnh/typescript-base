### Function Type Expressions

### Generic Functions

```typescript
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
```

### Inference

```typescript
function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output,
): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], n => parseInt(n));
```

### Constraints

-   `extends`

```typescript
function longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob');
```

### Function Overloads

```typescript
// Function Overloads example
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
```

### void, object, unknown, never, Function

-   `void`: represents the return value of functions which don’t return a value
-   `object`: refers to any value that isn’t a primitive, different from the
    empty object type `{ }`
-   `unknown`: type represents any value, similar to the `any` type, but it’s
    not legal to do anything with an `unknown` value
-   `never`: type represents values which are `never` observed
-   `Function`: describes properties like `bind`, `call`, `apply`, and others
    present on all function values in JavaScript
