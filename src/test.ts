/* eslint-disable no-redeclare */
function greet(person: any, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

// eslint-disable-next-line symbol-description
const sym = Symbol();
const obj = {
    [sym]: 'value',
};
// console.log(obj[sym]);

interface DescribableFunction {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(`${fn.description} returned ${fn(6)}`);
}
// Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    return new Date(mOrTimestamp);
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

//  Index Signatures
interface NumberDictionary {
    [index: string]: number | string;

    length: number; // ok
    name: string;
}

interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['A', 'B'];

// console.log(arr[0]);

// Generic
interface Box<Type> {
    contents: Type;
}

const box: Box<string> = {
    contents: 'Hello',
};

const objs: any = {
    a: 'string',
};

const a = 1;

// console.log({ a });

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg;
}

const myIdentity: GenericIdentityFn = identity;

class GenericNumber<NumType> {
    zeroValue: NumType | undefined;

    add: ((x: NumType, y: NumType) => NumType) | undefined;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

function getProperty<T, K extends keyof T>(smt: T, key: K) {
    return smt[key];
}
const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

getProperty(x, 'd');
