export function isBool(...args: any[]){
    return Boolean(args);
};


export function stringify(boolean: { toString: () => any; }){
    return boolean.toString();
};

export function valof(boolean: { valueOf: () => void; }){
    boolean.valueOf();
};

