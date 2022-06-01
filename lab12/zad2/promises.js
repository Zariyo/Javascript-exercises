import axios from 'axios';
'use strict';

// 2.1 Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback niech wypisze zwrócony string w konsoli.

const obj = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Udało się!');
      }, 1000);
})

obj.then((val)=>{
    console.log(val);
})
// 2.2 Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.

const obj1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject('Porażka!');
      }, 1000);
})

// obj1.then((val)=>{
//     console.log(val);
// })

// 2.3 Zamiast then(), zmodyfikuj powyższy kod używając catch()

obj1.catch((val)=>{
    console.log(val);
})

// 2.4 Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli.

const multiplyAsync = function(x,y){
    const objMultiply = new Promise((resolve, reject) => {
        if(typeof x == typeof 1 && typeof y == typeof 1){
            resolve(x*y)
        }else{
            reject("Bledne argumenty")
        }
    }) 
    return objMultiply
}

const obj2 = multiplyAsync(5,4)

obj2.then((res) => {
    console.log(res);
})

const obj3 = multiplyAsync("a", 2)
obj3.catch((err) =>{
    console.log("ERR " + err);
})


// 2.5 Dołącz axios do projektu. Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts. 
// Jako pierwszy callback - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.

/* 2.6 Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos.
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/


const getReq = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
        if(response.status==200){
            return response;
        }else{
            console.log("ERROR ERR ERR" + response.status);
        }})
    .then(function(response) {
        console.log(response.data);
        console.log(response.headers);
    }).catch(function(response){
        console.log("ERR " + response);
    })
}

const postReq = async (obj) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', obj).then(function(response){
        if(response.status==201){
            console.log("Dodano, id: " + obj.idUser);
            return response;
        }else{
            console.log("ERROR ERR ERR" + response.status);
        }}).catch(function(response){
            console.log("ERR " + response);
        })
}

const obj10 = {
    idUser: 5,
    title: "Adam",
    completed: true
}

postReq(obj10)