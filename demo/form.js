const BucketPrice = 10;







pg('#inputEmail3').on('keyup' , 'contextmenu', 'input', function(){
   let total = pg('#inputEmail3').val()
   pg('#amountFinal').setAttribute('value', `${total}`);
})



