export function igloo(array){ //constructor
    array.constructor
};

export function cct(array, ...args){ //Concat
    return array.concat(args);
};

export function cin(array, ...args){ //Copy Within
    return array.copyWithin(args);
};

export function iter(array){ //Entries
    return array.entries();
};

export function all(array, callback){ //select all members of the array
    return array.every(element => callback(element));
};

export function fill(array, ...args){    //fills the array with the same static value for each members of the array
   return array.fill(args);
};

export function filter(array, callback){ // idk how to describe this, you get it
    return array.filter(element => callback(element));
};

export function aFind(array, callback){ // pass a function that checks for an element in your array, and it will return the selected one
    return array.find(element => callback(element));
};

export function findex(array, callback){
    return array.findIndex(element => callback(element));      //find an array index
};

export function feach (array, callback) {
     return array.forEach(element => callback(element))        //for Each in array
};

export function from (array, ...args) { 
    return array.from(args);
};

export function has (array, ...args){
    return array.includes(args)
};

export function iof(array, ...args){
    return array.indexOf(args)
};

export function isArr(array, ...args){
    return array.isArray(args)
};

export function join(array, separator){
    return array.join(separator)
};

export function keys(array){
    return array.keys();
};

export function length(array){
    return array.length();
};

export function lindexOf(array, ...args){
    return array.lastindexOf(args);
};

export function map(array, callback){
    return array.map(element => callback(element))
};

export function Rlast(array){
    return array.pop()
};

export function push(array, ...args){
    return array.push(args)
};

export function reduce(array, callback){
    return array.reduce(element => callback(element));
};

export function reduceR(array, callback){
    return array.reduceRight(element => callback(element));
};

export function reverso(array){
    return array.reverse()
};

export function Rfirst(array){
    return array.shift();
};

export function slice(array, start, end){
    return array.slice(start, end)
};

export function some(array, callback){
    return array.some(element => callback(element));
};

export function sort(array, callback){
    return array.sort(element => callback(element));
};

export function splice(array, ...args){
    return array.splice(args);
};

export function toString(array){
    return array.toString();
}

export function unshift(array, ...args){
    return array.unshift(args);
};

export function ValOf(array){
    return array.valueOf();
};














