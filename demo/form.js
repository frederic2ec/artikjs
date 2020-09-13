const BucketPrice = 10;







pg('#inputEmail3').on('keyup' , 'contextmenu', 'input', function(){
   var total = pg('#inputEmail3').val()
   pg('#amountFinal').setAttribute('value', `${total}`);
})



