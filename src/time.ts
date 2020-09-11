export function sleep(ms: number){
        var d:any = new Date();
        var d2:any = null;
        do { d2 = new Date(); }
        while(d2-d < ms);
}



