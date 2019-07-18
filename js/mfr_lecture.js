"use strict";

const myNumbers = [4,5,6,7,8];
console.log(myNumbers);

// the parameter in the callback function is the current index value we are on
const myNewNumbers = myNumbers.map(function (x) {
    return x + 2;
});

console.log(myNewNumbers)



const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

/*
    MAP
    using .map, create an array that returns all author names.
 */

// const bookTitles = books.map(function (book) {
//     return book.title;
// })


const bookTitles = books.map( book => {
    return book.author;
});

/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
/*
    REDUCE
    using .reduce, return the total years between all books.
 */