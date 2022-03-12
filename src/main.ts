function greet(person: any, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

const sym = Symbol();
let obj = {
    [sym]: 'value',
};
console.log(obj[sym]);
