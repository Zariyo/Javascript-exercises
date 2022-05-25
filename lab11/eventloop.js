'use strict';
// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}

// Uzupełnij
setTimeout(() => helloWorld(), 200)


console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.

function start(){
    console.log("Start!");
    setTimeout(()=> console.log("Koniec"), 2000)
}

// start()

// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.

function welcome(){
    setInterval(() => console.log("Welcome"), 1000)
}

// welcome()

// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval

function welcome_5(){
    let interval = setInterval(() => console.log("Welcome 5"), 1000)
    setTimeout(() => { clearInterval(interval); console.log("Welcome Stop") }, 5000);
}

// welcome_5()



// Zadanie 1.5. 
// Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x ssekund i automatycznie zatrzyma się po upływie y sekund. 

function call_interval(fun, x, y){
    let interval = setInterval(() => fun("call"), x)
    setTimeout(() => { clearInterval(interval); console.log("Stop") }, y);
}

call_interval(console.log, 200, 1000)