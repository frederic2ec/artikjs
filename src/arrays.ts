export function igloo(array: { constructor: any; }){ //constructor
    array.constructor
};

export function cct(array: any[], ...args: any[]){ //Concat
    return array.concat(args);
};

export function cin(array: { copyWithin: (arg0: any[]) => any; }, ...args: any[]){ //Copy Within
    return array.copyWithin(args);
};

export function iter(array: any[]){ //Entries
    return array.entries();
};

export function all(array: any[], callback: (arg0: any) => any){ //select all members of the array
    return array.every((element: any) => callback(element));
};

export function fill(array: any[][], ...args: any[]){    //fills the array with the same static value for each members of the array
   return array.fill(args);
};

export function filter(array: any[], callback: (arg0: any) => any){ // idk how to describe this, you get it
    return array.filter((element: any) => callback(element));
};

export function aFind(array: any[], callback: (arg0: any) => any){ // pass a function that checks for an element in your array, and it will return the selected one
    return array.find((element: any) => callback(element));
};

export function findex(array: any[], callback: (arg0: any) => any){
    return array.findIndex((element: any) => callback(element));      //find an array index
};

export function feach (array: any[], callback: (arg0: any) => any) {
     return array.forEach((element: any) => callback(element))        //for Each in array
};

export function from (array: { from: (arg0: any[]) => any; }, ...args: any[]) { 
    return array.from(args);
};

export function has (array: any[][], ...args: any[]){
    return array.includes(args)
};

export function iof(array: any[][], ...args: any[]){
    return array.indexOf(args)
};

export function isArr(array: { isArray: (arg0: any[]) => any; }, ...args: any[]){
    return array.isArray(args)
};

export function join(array: any[], separator: any){
    return array.join(separator)
};

export function keys(array: any[]){
    return array.keys();
};

export function length(array: { length: () => any; }){
    return array.length();
};

export function lindexOf(array: { lastindexOf: (arg0: any[]) => any; }, ...args: any[]){
    return array.lastindexOf(args);
};

export function map(array: any[], callback: (arg0: any) => any){
    return array.map((element: any) => callback(element))
};

export function Rlast(array: any[]){
    return array.pop()
};

export function push(array: any[][], ...args: any[]){
    return array.push(args)
};

export function reduce(array: any[], callback: (arg0: any) => any){
    return array.reduce((element: any) => callback(element));
};

export function reduceR(array: any[], callback: (arg0: any) => any){
    return array.reduceRight((element: any) => callback(element));
};

export function reverso(array: any[]){
    return array.reverse()
};

export function Rfirst(array: any[]){
    return array.shift();
};

export function slice(array: string | any[], start: any, end: any){
    return array.slice(start, end)
};

export function some(array: any[], callback: (arg0: any) => any){
    return array.some((element: any) => callback(element));
};

export function sort(array: any, callback: any){
    return array.sort((element: any) => callback(element));
};

export function splice(array: { splice: (arg0: any[]) => any; }, ...args: any[]){
    return array.splice(args);
};

export function toString(array: { toString: () => any; }){
    return array.toString();
}

export function unshift(array: any[][], ...args: any[]){
    return array.unshift(args);
};

export function ValOf(array: { valueOf: () => any; }){
    return array.valueOf();
};














