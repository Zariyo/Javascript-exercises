"use strict";

// Zad 1.
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
let uniqNumbers = [];

for (let i=0;i<=numbers.length-1;i++){
    let exists = false;
    for (let j=0;j<=uniqNumbers.length-1;j++){
        if(numbers[i]==uniqNumbers[j]){
            exists = true;
        };
    };
    if(!exists){
        uniqNumbers.push(numbers[i]);
    };
};
console.log(uniqNumbers);


// Zad 2.
const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
let resArray = [];

for (let i=0;i<=array.length-1;i++){
    if(typeof array[i] == 'number'){
        resArray.unshift(array[i])
    }
    else{
        resArray.push(array[i])
    };
};
console.log(resArray);

// Zad 3.
const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 
const resTestArray = [];
for(let n in testArray){
    if(testArray[n] instanceof Array){
        resTestArray.push(...testArray[n])
    }else{
        resTestArray.push(testArray[n])
    };
};
console.log(resTestArray);


// Zad 4.
const cat = { 
    name: 'Filemon', 
    age: 6 
};

console.log(`Kot ma na imię ${cat.name} i ma ${cat.age} lat.`);

// Zad 5.
cat.description = `Kot ma na imię ${cat.name} i ma ${cat.age} lat.`;
console.log(cat.description);

// Zad 6.
cat.breed = "Pers";
cat.color = "Szary";

cat.description = cat.description + ` Jest rasy ${cat.breed} i koloru ${cat.color}`;
console.log(cat.description);


// Zad 7.
const person1 = {
    name: "Agata",
    age: 21
};
const person2 = {
    name: "Tomasz",
    age: 25
};
const person3 = {
    name: "Alicja",
    age: 31
};
const person4 = {
    name: "Jan",
    age: 20
};

const people = [person1,person2,person3,person4];
let ageSum = 0;
for(let n in people){
    ageSum += people[n].age;
};
console.log("Suma wieku: " + ageSum);
let ageAvg = ageSum/people.length;
console.log("Srednia wieku: " + ageAvg);

// Zad 8.

let peopleUnderAvg = [];
let peopleAboveAvg = [];

for(let n in people){
    if(people[n].age >= ageAvg){ peopleAboveAvg.push(people[n]) }
    else { peopleUnderAvg.push(people[n]) };
};

console.log(peopleUnderAvg);
console.log(peopleAboveAvg);