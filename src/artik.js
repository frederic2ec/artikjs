(function () {
  'use strict';

  function dom(selector) {
    const self = {
      element: document.querySelector(selector),
      html: () => self.element,
      on: (event, callback) => {
        self.element.addEventListener(event, callback);
      },
      hide: () => {
        self.element.style.display = "none";
      },
      keyup: () => {
        self.element.onkeyup;
      },
      //attributes
      val: () => {
        self.element.value;
      },
      name: () =>{
        self.element.name;
      }
    };
    return self;
  }

  function getJSON(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, true);

    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 400) {
            const response = JSON.parse(this.responseText);
            const status = this.status;
            resolve({ status, response });
          } else {
            const response = JSON.parse(this.responseText);
            const status = this.status;
            reject({ status, response });
          }
        }
      };
      request.send();
      request = null;
    });
  }

  //    ###    ########  ########  ######## #### ##    ##           ##  ######  
      //   ## ##   ##     ## ##     ##    ##     ##  ##   ##            ## ##    ## 
      //  ##   ##  ##     ## ##     ##    ##     ##  ##  ##             ## ##       
      // ##     ## ########  ########     ##     ##  #####              ##  ######  
      // ######### ##   ##   ##   ##      ##     ##  ##  ##       ##    ##       ## 
      // ##     ## ##    ##  ##    ##     ##     ##  ##   ##  ### ##    ## ##    ## 
      // ##     ## ##     ## ##     ##    ##    #### ##    ## ###  ######   ######  

  function write(string){
      document.write(string);
  }
  function alert(string){
  }
  function cprint(string){
      console.log(string);
  }
  function wprint(){
      window.print();
  }

  function igloo(array){ //constructor
      array.constructor;
  }
  function cct(array, ...args){ //Concat
      return array.concat(args);
  }
  function cin(array, ...args){ //Copy Within
      return array.copyWithin(args);
  }
  function iter(array){ //Entries
      return array.entries();
  }
  function all(array, callback){ //select all members of the array
      return array.every(element => callback(element));
  }
  function fill(array, ...args){    //fills the array with the same static value for each members of the array
     return array.fill(args);
  }
  function filter(array, callback){ // idk how to describe this, you get it
      return array.filter(element => callback(element));
  }
  function aFind(array, callback){ // pass a function that checks for an element in your array, and it will return the selected one
      return array.find(element => callback(element));
  }
  function findex(array, callback){
      return array.findIndex(element => callback(element));      //find an array index
  }
  function feach (array, callback) {
       return array.forEach(element => callback(element))        //for Each in array
  }
  function from (array, ...args) { 
      return array.from(args);
  }
  function has (array, ...args){
      return array.includes(args)
  }
  function iof(array, ...args){
      return array.indexOf(args)
  }
  function isArr(array, ...args){
      return array.isArray(args)
  }
  function join(array, separator){
      return array.join(separator)
  }
  function keys(array){
      return array.keys();
  }
  function lindexOf(array, ...args){
      return array.lastindexOf(args);
  }
  function map(array, callback){
      return array.map(element => callback(element))
  }
  function Rlast(array){
      return array.pop()
  }
  function reduce(array, callback){
      return array.reduce(element => callback(element));
  }
  function reduceR(array, callback){
      return array.reduceRight(element => callback(element));
  }
  function reverso(array){
      return array.reverse()
  }
  function Rfirst(array){
      return array.shift();
  }
  function slice(array, start, end){
      return array.slice(start, end)
  }
  function some(array, callback){
      return array.some(element => callback(element));
  }
  function sort(array, callback){
      return array.sort(element => callback(element));
  }
  function splice(array, ...args){
      return array.splice(args);
  }
  function toString(array){
      return array.toString();
  }

  function unshift(array, ...args){
      return array.unshift(args);
  }
  function ValOf(array){
      return array.valueOf();
  }

  function isBool(...args){
      return Boolean(args);
  }
  function proto(boolean, name){
      return Boolean.prototype.name
  }
  function stringify(boolean){
      return boolean.toString();
  }
  function valof(boolean){
      boolean.valueOf();
  }

  function sleep(ms){
  }

  //    ###    ########  ########  ######## #### ##    ##           ##  ######

  dom.getJSON = getJSON;
  dom.alert = alert;
  dom.cprint = cprint;
  dom.write = write;
  dom.wprint = wprint;
  dom.igloo = igloo;
  dom.cct = cct;
  dom.cin = cin;
  dom.iter = iter;
  dom.all = all;
  dom.fill = fill;
  dom.filter = filter;
  dom.aFind = aFind;
  dom.findex = findex;
  dom.feach = feach;
  dom.from = from;
  dom.has = has;
  dom.iof = iof;
  dom.isArr = isArr;
  dom.join = join;
  dom.keys = keys;
  //dom.length = length;
  dom.lindexOf = lindexOf;
  dom.map = map;
  dom.Rlast = Rlast;
  dom.reduce = reduce;
  dom.reduceR = reduceR;
  dom.reverso = reverso;
  dom.Rfirst = Rfirst;
  dom.slice = slice;
  dom.some = some;
  dom.sort = sort;
  dom.splice = splice;
  dom.toString = toString;
  dom.unshift = unshift;
  dom.ValOf = ValOf;
  dom.isBool = isBool;
  dom.proto = proto;
  dom.stringify = stringify;
  dom.valof = valof;
  dom.sleep = sleep;

  return dom;

}());
