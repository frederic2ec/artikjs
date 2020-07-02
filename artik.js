(function(window){
    'use strict'
    function defineARTIK() {
        var ARTIK = {};
        ARTIK.alert = function (string) {
            alert(string)
        };

        ARTIK.pi = Math.PI;

        ARTIK.find = function (string) {
            getElementById(string);
        };

        ARTIK.write = function (string) {
            document.write(string)
        };

        ARTIK.log = function (string) {
            console.log(string)
        };

        ARTIK.print = function (string) {
            print(string)
        };

        ARTIK.greet = function (string) {
            ARTIK.log("Hello " + string)
        };

        ARTIK.wait = function (ms)
        {
            var d = new Date();
            var d2 = null;
            do { d2 = new Date(); }
            while(d2-d < ms);
        }
        return ARTIK;
    }
    if(typeof(ARTIK) === 'undefined'){
        window.ARTIK = defineARTIK();
        document.ARTIK = defineARTIK();
    }

})(window, document);


