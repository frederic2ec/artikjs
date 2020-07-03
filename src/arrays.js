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
     array.forEach(element => callback(element))        //for Each in array
};












