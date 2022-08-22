function first() {
    console.log('first(): factory evaluated');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        console.log('first(): called');
    };
}

function second() {
    console.log('second(): factory evaluated');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        console.log('second(): called');
    };
}

class ExampleClass {
    private readonly a = 'successfull';

    @first()
    @second()
    method() {
        console.log('run', this.a);
    }
}

export default ExampleClass;
