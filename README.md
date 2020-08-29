
# ARTIK.js <img src="https://i.imgur.com/kDXK6Bj.png" width=10% height=10%>
A simple lightweight vanilla javascript library.

## How to compile from source

* **(Prerequesite)** install node.js 

* Run "npm install" inside Artik's directory

* Run "npm run build" inside Artik's directory

* you successfully compiled Artik.js

## How do I include it in my project if i'm compiling from source ?

* put the source code in your project's asset folder

* Add this line at the bottom of the body of every HTML page you want to include Artik.js in

[![Image from Gyazo](https://i.gyazo.com/f5796af1b3caac9b2725b15d8312f4cd.png)](https://gyazo.com/f5796af1b3caac9b2725b15d8312f4cd)


### Why should I use Artik.js instead of vanilla javascript ?
* ARTIK has been made with simplicity and compatibility in mind. ARTIK.js is a very lite javascript library that is and will always be compatible with old and new browsers.

* ARTIK is basically Jquery, but modern, and very lite.

* It's Easy to use, simplicity is key :key:

* Artik is completely modern, free and open source. 


### What's the progress report ?

|     **Arrays**     |   **Booleans**   | **DOM**     |
| :------------- | :----------: | -----------: |
|  Completed ✔️ | In progress ☑️   | In progress ☑️    |


### It's time to ditch Jquery !

* In many ways thanks to jQuery, jQuery itself is no longer needed. Switch to Artik 😉 🧊

### A note for non developpers or beginners

* if you make changes to Artik.js either by accident or intentionnaly don't forget to compile it again.


## Available DOM functions

* Instead of using **$** has the Query selector we decided to use **pg** 


| **DOM**     |
| :------------- |
|  pg('#selector').on(event, callback) | 
|  .setAttribute(attr, value) | 
|  .val() returns the value | 
|  .keyup() | 
|  .hide() | 
|  .html() | 


### An Example
```javascript
pg('#inputEmail3').on('keyup', function(){
   var total = pg('#inputEmail3').val()
   pg('#amountFinal').setAttribute('value', `${total}`);
})
```

