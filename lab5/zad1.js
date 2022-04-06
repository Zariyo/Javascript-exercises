'use strict'
// Zad 1

let tab = [1,2,3,4];

let sum = tab.reduce((prev, curr, ind, arr) =>{
    return prev+curr;
});
console.log(sum);

// Zad 2

tab = [-3,2,5,1,-6];

tab = tab.reduce((prev, curr, ind, arr)=>{
    if(curr>=0){ 
        return [...prev, curr*curr]
    }
    return [...prev]
},[])

console.log(tab);

// Zad 3

tab = [1, 3, 6, 2, 9]

let res = tab.reduce((prev ,curr ,ind ,arr)=>{
    prev[ind] = curr;
    return prev
},{});

console.log(res);

// Zad 4

tab = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
];

res = tab.reduce((prev, curr, ind, arr)=>{
    prev[curr["id"]] = curr;
    return prev;
},{})

console.log(res);

// Zad 5

const wishlist = [   
    {  
        name: 'Czajnik',  
        netto: 100  
    },  
    {  
        name: 'Lodówka',  
        netto: 1300  
    },  
    {  
        name: 'Mikrofalówka',  
        netto: 340  
    },  
    {  
        name: 'Mikser',  
        netto: 120  
    },  
    {  
        name: 'Piekarnik',  
        netto: 2100  
    }  
]

res = wishlist.reduce((prev, curr, ind, arr)=>{
    return prev+curr["netto"]*1.23
}, 0)

console.log(res);

res = wishlist.reduce((prev, curr, ind, arr)=>{
    return [...prev, curr["netto"]]
}, [])

console.log(res);

function func(tab, fun){
    return res = tab.reduce((prev, curr, ind, arr)=>{
        return [...prev, fun(curr)]
    }, [])
}

let newArray = func(wishlist, x => x.name + ': ' + x.netto)

console.log(newArray);

newArray = wishlist.map(x => x.name + ': ' + x.netto)

console.log(newArray);

newArray = func(wishlist, x => x.netto<500?x:{}).filter(x => x.name != undefined);
console.log(newArray);

function func1(tab, fun){
    return res = tab.reduce((prev, curr, ind, arr)=>{
        return fun(curr)?curr:prev
    }, undefined)
}

let element = func1([ 'Mama', 'Jan', 'Kot', 'Pies' ], y => y === 'Ala');

console.log(element);