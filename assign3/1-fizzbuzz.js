// Enter your code here

var number;
for (number=0;number<101;number++){
    if(number%5 == 0 && number%3 != 0){console.log('buzz');}
    else if(number%5 != 0 && number%3 == 0){ console.log('fizz'); }
    else if(number%5 == 0 && number%3 == 0){ console.log('fizzbuzz'); }
    else{ console.log(number); }
}
