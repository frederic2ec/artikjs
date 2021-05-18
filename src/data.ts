export function data(str: string) {
    return function data(o:any) {
        return str.replace(/{([^{}]*)}/g, (a:any, b:any) => {
            let r: number = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    }
}

const testString: string = "Hello my name is {name}"



const myStuff = data(testString)({
    name: "Borat"
});


const max = "Max"

console.log(`Hello ${max}`)

console.log(myStuff);
console.log(testString);