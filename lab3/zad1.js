'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

// isEquals(2, '2'); A D
// isEquals(null, undefined); A D
// isEquals(undefined, NaN); B D
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); B D
// isEquals(0, ''); A D
// isEquals('0', ''); B D
// isEquals(+0, -0); A C
// isEquals(0, false); A D
// isEquals(0, 'false'); B D
// isEquals([1, 2], '1,2'); A D

!!false;
!!true;
!!undefined;
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

// console.log(person);
// person = {};
// console.log(person);

// Błąd przez przypisanie do const

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

// number poza nawiasami klamrowymi jest równy 3, a w środku jego 'lokalna' wartość wynosi 4

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

// newArr1 wyswietla elementy tablicy tak jak zostały przypisane, 
// a newArr2 używa spread operatora żeby rozwinąć tablicę arr w tablicy newArr2, pozbywając się zagłębienia tablic.

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// const word = 'react';
// const arrWord = [...word];
// console.log(arrWord);

// arrWord po uzyciu spread operatora na wartosci string stworzyl tablice z pojedynczymi literami, bo potraktowal stringa jako tablice liter do rozwinięcia.

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

// var hello = 'Hello world!';
// var result = hello / 2;

// console.log(result);

// console.log(Number.isNaN(result));
// console.log(Number.isNaN(hello));

// zmienna result bedzię miała wartość NaN - not a number, przez próbę wykonania operacji arytmetycznych na stringu.

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// var car = 'BMW';

// function showCar() {
//     car = 'Audi';
//     model = 'A5';
//     console.log('Great car!');
// }

// showCar();

// car;
// model;

// Wyrzuca błąd bo model nie jest zdefiniowany

//-------

// if (true) {
//     var a = 2;
// }
// console.log(a);

// if (true) {
//     const b = 2;
// }
// console.log(b);

// Wyswietla a, ale nie b

//-------

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i + ' out');

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i + ' out');

// W obu tak samo wyswietla i

//-------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";

// var można zadeklarować ponownie, a let nie

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// Do bardziej restrykcyjnej kompilacji kodu - wymusza zachowanie stylu kodu