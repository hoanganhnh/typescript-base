### Working with Generic Type Variables

```typescript
function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

### Generic Types

```typescript
interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg;
}

const myIdentity: GenericIdentityFn = identity;
```

### Generic classes

```typescript
class GenericNumber<NumType> {
    zeroValue: NumType | undefined;

    add: ((x: NumType, y: NumType) => NumType) | undefined;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

### Using Type Parameters in Generic Constraints

```typescript
function getProperty<T, K extends keyof T>(smt: T, key: K) {
    return smt[key];
}
const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

getProperty(x, 'a');
getProperty(x, 'b');
getProperty(x, 'c');
getProperty(x, 'd');
```