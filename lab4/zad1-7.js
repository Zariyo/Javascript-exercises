'use strict'
// Zad 1
function declare(x){
    const c = 5;
    return function sum(x){
        return c+x;
    }(x);
};

console.log(declare(10));

// Zad 2
(function (str){
    let strArr = str.split(' ')
    console.log(strArr)
    let maxWord = ["", 0]
    for (let i in strArr){
        if(strArr[i].length>maxWord[1]){
            maxWord = [strArr[i], strArr[i].length]
        }
    }
    return maxWord[0]
})("Ala ma kota");

// Zad 3

function exampleFunc(){
    console.log("Example");
};

function call(funcToCall){
    funcToCall();
};

call(exampleFunc);

// Zad 4

function getName(func){
    return func.name;
};

console.log(getName(exampleFunc));

// Zad 5

function recSum(n){
    if(n==0){return 0}
    return (n + recSum(n-1))
};

console.log(recSum(4));

// Zad 6

function NWD(a, b){
    if(b!==0){
        return NWD(b, a%b);
    }
    return a;
}

console.log(NWD(12, 4));

// Zad 7

function palindrom(arr){
    for(let i in arr){
        if(arr[i] !== arr[arr.length-i-1]){return false}
    }
    return true
}

console.log(palindrom([1,2,3,2,1]));
