import axios from 'axios';
'use strict';

/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
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

//getReq()

/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

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

const obj1 = {
    idUser: 5,
    title: "Adam",
    completed: true
}

postReq(obj1)