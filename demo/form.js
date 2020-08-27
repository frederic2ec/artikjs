const BucketPrice = 10;





function displayBill(name, occupation){
     name = pg('#inputEmail3').val();
    occupation = pg('#inputPassword3').val();
    pg('#amountFinal').val() = name
};

pg('#rbtn').on("click", function(){
    displayBill()
});

pg('#inputEmail3').on('keyup', function(){
   console.log(pg('#inputEmail3'))
})

