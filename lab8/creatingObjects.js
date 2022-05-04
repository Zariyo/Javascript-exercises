
//  1. Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisuje author - title

const book0 = {
    author: "Jan",
    title: "Zycie Jana",
    print(){
        console.log(this.author + " - " + this.title);
    }
    };
//book0.print();

const book = {};
book.author = "Adam",
book.title = "Zycie Adama",
book.print = () => {console.log(book.author + " - " + book.title)}
book.print();

const book2 = Object.create({});
book2.author = "Marian",
book2.title = "Zycie Mariana",
book2.print = function() {console.log(this.author + " - " + this.title)}
book2.print();

function BookCreator(title, author) {
    const b = {
        title: title,
        author: author,
        print(){
            console.log(this.title + " - " + this.author);
        }
    };
    return b

}

const book3 = BookCreator('Cień wiatru', 'Carlos Ruiz Zafon');
const book4 = BookCreator('Ojciech Chrzestny', 'Mario Puzo');

book3.print();
book4.print();

// 2. Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
    console.log(this);
}

// testThis();

function testThis2() {
    "use strict"
    console.log(this);
}

// testThis2();


// 2.1. Czym jest this? - Referencją obiektu/funkcji do samego siebie - swoich wlasciwosci
// 2.2. Do czego odwołuje się this w obu przypadkach - w 1. do obiektu dokumentu, a w 2. jedynie do funkcji testThis2

const person = {
    name: 'Oscar Wilde',
    print() {
        console.log(this.name);

        function a(p) {
            console.log("a: " + p.name);
        }
        a(this);
    }
}
person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego? W 1. To referencja do obiektu person, a w 2. do obiektu całego dokumentu
// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function() {
    console.log(this.name);
}

const person1 = {
    name: 'Aaron Towels' 
}

const person2 = {
    name: 'Tom Clancy' 
}

person1.print = printName
person1.print()
person2.print = printName
person2.print()

// 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!


const person3 = {
    name: 'Arthur Conan Doyle',
    print() {
        const a = () => {
            console.log(this);
        };
        a();
    }
}
// person3.print();

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function? wydrukuje obiekt person3, ma scope ograniczony do obiektu w którym występuje

// 3. owróćmy do zadania 1. 
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?

// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title. 

function BookCreator2(title, author, readers = 0) {
    const b = {
        title: title,
        author: author,
        readers: readers,
        print(){
            console.log(this.title + " - " + this.author);
        },
        addReader(){
            this.readers++;
        }
    };
    return b

}

book5 = BookCreator2("Ksiazeczka", "Pisarz")
console.log(book5.readers);
book5.addReader()
console.log(book5.readers);

console.log(book5.hasOwnProperty('isBestseller'))

console.log(book5.__proto__);

// Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
// Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
// Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.


// 4. Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller'). 
// Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania lub spytaj prowadzącego)



// 5. Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy? Zawiera prototyp obiektu, czyli pokazuje po czym dziedziczy nasz obiekt - po implementacji obiektu w javascript