//add
function add(a,b){
    return a+b;
}

//substraction
function substract(a,b){
    return a-b;
}
//multiplication
function multiplication(a,b){
    return a*b;
}
//division
function division(a,b){
    if(b==0){
        return "Divisor can not be zero";
    }
    return a/b;
}

//functorial 
function factorial(number){
    if(number===0){
        return 1;
    }
    else if(number<0){
        return "Not possible";
    }
   for(let i=number-1;i>0;i--){
       number=number*i;
   }
    return number;

}

module.exports = {add,substract,multiplication,division,factorial};