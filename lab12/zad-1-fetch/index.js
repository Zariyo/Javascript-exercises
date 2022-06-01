'use strict';
/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'body' i 'headers'.
*/

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
       if (response.status == 200){
           return response
       } else {
           return "error"
       }
    })
    .then(json => {
        console.log(json.headers);
        console.log(json.body);
    })
    .catch(err => {
        console.log(err);
    })

/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}
Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

const postTodo = (user) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {method: 'POST', body: user})
    .then(response => {
       if (response.status == 201){
           return(
            console.log(response.json())
           )
       } else {
           console.log('err')
       }
    })
    .catch(err => {
        console.log(err);
    })
}
postTodo({
    idUser: 15,
    title: "test",
    completed: false
})