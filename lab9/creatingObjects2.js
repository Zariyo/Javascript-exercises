// Brawo, na poprzednich laboratoriach dowiedziałeś/aś się jak działa słowo kluczowe new :) 
// 1. Uprość funkcję BookCreator tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 

function BookCreator(title, author) {
    this.title = title;
    this.author = author;
}

book1 = new BookCreator("Dziady", "Mickiewicz")

console.log(book1.title);


// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.

BookCreator.prototype.print = function(){
    console.log(this.title);
    console.log(this.author);
}

book1.print()

// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczwych class i constructor, aby osiągnąć powyższy efekt.

class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}
const book2 = new Book("Wesele", "Wyspiański")
console.log(book2);


// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = (name, age) => ({
    name: name,
    age: age,
    addAge(){
        this.age +=1
    },
    print(){
        console.log(this.name + " age: " + this.age);
    }
})

person1 = Person("adam", 22)

person1.print()
person1.addAge()
person1.print()

// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)

// person2 = new Person("Kuba")
// person2.print()
