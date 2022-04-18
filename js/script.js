let Button = document.querySelector(".random-btn");
let Author = document.querySelector("#author");
let Quote = document.querySelector("#quote");

 // quote//
let quotesHolder = [
    {
        quote: "Life is what happens when you’re busy making other plans.",
        author: "— John Lennon",
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "— Stephen King",
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "– Babe Ruth",
    },
    {
        quote: "In order to write about life first you must live it.",
        author: "– Ernest Hemingway",
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: " — Oprah Winfrey",
    },
    {
        quote: "I like criticism. It makes you strong.",
        author: "— LeBron James",
    },
    {
        quote: "Live for each second without hesitation.",
        author: "— Elton John"
    },
    {
        quote: "Keep calm and carry on.",
        author: "— Winston Churchill"
    },
    {
        quote: "The greatest pleasure of life is love.",
        author: "— Euripides"
    },
    {
        quote: "Don’t cry because it’s over, smile because it happened.",
        author: "—Dr. Seuss"
    },
    {
        quote: "The minute that you’re not learning I believe you’re dead.",
        author: " – Jack Nicholson"
    },
    {
        quote: "Life’s tough, but it’s tougher when you’re stupid.",
        author: "– John Wayne",
    }
];

// quote generating function //

function generateRandomQuote() {
    let random = quotesHolder[Math.floor(Math.random() * quotesHolder.length)];
    Quote.innerHTML = random.quote;
    Author.innerHTML = random.author;
}


Button.addEventListener("click", generateRandomQuote);