export function igloo(array){ //constructor
    array.constructor
};

export function cct(array, x, y){ //Concat
    array.concat(x, y);
};

export function cin(array, x, y){ //Copy Within
    array.copyWithin(x,y);
};

export function iter(array){ //Entries
    array.entries();
};

export function find(string){   //Document.getelementbyid
    document.getElementById(string);
};

export function all(array, string){
    array.every(string);
};

export function fill(array, string){
    array.fill(string);
};

export function filter(array, string){
    array.filter(string)
};



// export function kvpairs(string, k, v){  //finds an element, replaces it with a Key value Table 
//     for (k of v) {
//         find(string).innerHTML += k + "<br>";
//     };
// };