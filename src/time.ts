export function sleep(ms){
        var d:any = new Date();
        var d2:any = null;
        do { d2 = new Date(); }
        while(d2-d < ms);
}



