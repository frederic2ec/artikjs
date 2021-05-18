pg.strap('allo-custom');

let text;


const Stuff = pg.data(document.querySelector('.display-4').innerHTML)({
    allo: "Yo",
    ami: "bob",
})
document.querySelector('.display-4').innerHTML = Stuff


console.log(text)



console.log(Stuff)



