'use strict'

function isPositiveEven(number) {
    if(number>0){
        if(number%2 === 0){
            return true
        }
        return false
    }
    return false
}

console.log(isPositiveEven(-2))

const toArray = (a, b) => {
    return [a,b]
}

console.log(toArray(1,2))

const countWords = (tab) => {
    let wordCount = {}
    for(let i in tab){
        if(!wordCount[tab[i]]){
            wordCount[tab[i]] = 1
        }else{
            wordCount[tab[i]] += 1
        }
    }
    return wordCount
}

console.log(countWords( ['js', 'react', 'js', 'angular', 'angular', 'js']))

const unequal = (a, b, c) => {
    if(a===b){
        return false
    }
    if(a===c){
        return false
    }
    if(b===c){
        return false
    }
    return true
}

console.log(unequal(1,1,3))

const printArr = (arr) => {
    for(let i in arr){
        console.log("rząd " + i)
        for(let j in arr[i]){
            console.log(arr[i][j])
        };
    };
};

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

printArr(a);